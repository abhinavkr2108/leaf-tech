import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoDocument } from "react-icons/io5";

export default function Home() {
  return (
    <div className=" bg-cardBg">
      <div className="flex gap-4">
        <div>
          <div className="w-0 hidden md:w-64 md:flex flex-col justify-between items-center">
            <Sidebar />
          </div>
          <div className="flex p-2 md:hidden">
            <Sheet>
              <SheetTrigger>
                <GiHamburgerMenu size={20} />
              </SheetTrigger>
              <SheetContent side={"left"}>
                <div className="h-full flex flex-col items-center justify-between">
                  <div className="flex flex-col gap-12 items-center">
                    <div className="flex gap-2 pt-4 items-center">
                      <Image
                        src="/task.png"
                        width={50}
                        height={50}
                        alt="logo"
                      />
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
                    <Image
                      src="/leaves.png"
                      width={20}
                      height={20}
                      alt="leaves"
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="m-4 bg-header w-full rounded-md">
          <Content />
        </div>
      </div>
    </div>
  );
}
