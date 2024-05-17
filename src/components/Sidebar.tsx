import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { IoDocument } from "react-icons/io5";

export default function Sidebar() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-between">
        <div className="flex flex-col gap-12 items-center">
          <div className="flex gap-2 pt-4 items-center">
            <Image src="/task.png" width={50} height={50} alt="logo" />
            <h1 className="font-bold text-[32px]">Canvas</h1>
          </div>
          <div>
            <Button className="bg-white flex gap-2 items-center border-[1px] border-black rounded-[12px] px-4 py-2">
              <IoDocument className="text-header" size={20} />
              <p className="text-black">List of Notes</p>
            </Button>
          </div>
        </div>
        <div className="flex gap-2 items-center font-semibold text-[15px]">
          Powered By Leaf Technologies{" "}
          <Image src="/leaves.png" width={20} height={20} alt="leaves" />
        </div>
      </div>
    </>
  );
}
