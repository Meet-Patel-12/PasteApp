import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../features/pasteSlice";
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function createPaste() {
    if (title === "" || value === "") {
      toast.error("Please Fill all the Field!");
    } else {
      const paste = {
        title: title,
        content: value,
        _id: pasteId || Date.now().toString(36),
        createdAt: new Date().toISOString(),
      };
      // Add your dispatch or logic here
      if (pasteId) {
        dispatch(updateToPastes(paste));
      } else {
        dispatch(addToPastes(paste));
      }

      setTitle("");
      setValue("");
      setSearchParams({});
    }
  }

  return (
    <div className="min-h-screen w-full bg-white p-8">
      <div className="flex flex-col md:flex-row justify-between gap-3 mb-5">
        <input
          className="flex-1 p-3 rounded-2xl border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={createPaste}
          className=" bg-blue-600 text-white font-semibold px-6 py-3 rounded-2xl hover:bg-blue-700 transition"
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
      <textarea
        className="w-full p-3 rounded-lg border-2 border-blue-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={value}
        placeholder="Enter Content Here"
        onChange={(e) => setValue(e.target.value)}
        rows={20}
      />
    </div>
  );
};

export default Home;
