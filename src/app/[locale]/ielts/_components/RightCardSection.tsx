import { ChecklistItem, cta_text, MediaItem } from "@/interface/courseData";
import React from "react";
import Trailer from "./Trailer";
import Checklist from "./Checklist";

interface RightCardSectionProps {
  media: MediaItem[];
  cta_text: cta_text;
  checklist: ChecklistItem[];
}

const RightCardSection = ({
  media,
  cta_text,
  checklist,
}: RightCardSectionProps) => {
  return (
    <div className="lg:sticky lg:top-16 transition-all duration-300 ease-in-out">
      <div className="bg-white rounded-lg shadow-md p-1 h-fit pb-2 overflow-y-auto">
        <Trailer media={media} />

        <div className="px-4">
          <h3 className="text-3xl mt-4 font-semibold">৳1000</h3>
          <p className="font-semibold text-green-400">IELTS Course</p>

          <button
            className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-green-600 
          font-semibold active:shadow-none shadow-lg bg-gradient-to-tr w-full from-green-600 to-green-500 border-green-700 text-white"
          >
            {cta_text.name}
          </button>
        </div>

        <Checklist checklist={checklist} />

        <p className="justify-between hidden mt-14 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
          <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
          <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
            </svg>{" "}
            <span className="ml-1">ফোন করুন (16910)</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default RightCardSection;
