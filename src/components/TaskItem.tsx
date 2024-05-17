import { Tasks } from "@/constants/types";
import React from "react";
import { Card } from "./ui/card";

export default function TaskItem({ task }: { task: Tasks }) {
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const options = {
      hour: "numeric" as const,
      minute: "numeric" as const,
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };
  return (
    <Card className="bg-cardBg">
      <div className="px-4 py-2">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <img
              src={task.image}
              alt="task"
              className="w-14 h-14 rounded-md "
            />
            <div>
              <h1 className="text-lg font-bold">{task.title}</h1>
              <h2>{task.subtitle}</h2>
            </div>
          </div>
          <div>{formatTime(task.createdAt)}</div>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <p className="font-bold text-sm">
            Tags:{" "}
            <span className="border border-black rounded-full p-1 text-xs">
              {task.tags}
            </span>
          </p>
          <p className="font-bold text-sm">
            Highlight: <span className="font-normal">{task.highlight}</span>
          </p>
          <p className="font-bold text-sm">
            Notes: <span className="font-normal">{task.notes}</span>
          </p>
        </div>
      </div>
    </Card>
  );
}
