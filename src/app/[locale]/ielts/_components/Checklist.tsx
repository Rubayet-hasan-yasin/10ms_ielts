import { ChecklistItem } from "@/interface/courseData";
import Image from "next/image";
import React from "react";

type ChecklistProps = {
  checklist: ChecklistItem[];
};

const Checklist = ({ checklist }: ChecklistProps) => {
  return (
    <div className="mt-6 px-4">
      <p className="font-bold text-2xl mb-4">এই কোর্সে যা থাকছে</p>
      <ul>
        {checklist.map((item, idx) => (
          <li key={idx} className={`space-x-2 items-center mb-2 ${item.list_page_visibility ? "flex" : "hidden"}`}>
            <Image src={item.icon} alt="icon" width={20} height={20} />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
