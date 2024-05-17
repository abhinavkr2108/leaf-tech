"use client";
import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { Tasks } from "@/constants/types";
import TaskItem from "./TaskItem";

export default function NotesContent() {
  const [tasks, setTasks] = useState<Tasks[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("/api/tasks");
        const data = await response.json();
        setTasks(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);
  return (
    <div className="mt-5">
      <Card className="bg-white rounded-md border border-black w-full h-full">
        <div className="px-4 pt-4">
          Notes Created on <span className="font-bold">16th May 2024</span>
        </div>
        <div className="p-4">
          {tasks?.map((task) => (
            <div key={task.id} className="mt-3">
              <TaskItem task={task} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
