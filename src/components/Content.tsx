import React from "react";
import { IoMdSettings } from "react-icons/io";
import { Switch } from "./ui/switch";
import NotesContent from "./NotesContent";

export default function Content() {
  return (
    <div>
      <div className="px-4 py-2 flex justify-end items-center gap-4 text-white">
        <IoMdSettings size={20} />
        <Switch />
        <p className="font-semibold">Logout</p>
      </div>
      <NotesContent />
    </div>
  );
}
