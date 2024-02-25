import React from "react";

export default function Logo({ height, width, fontSize }) {
  return (
    <div
      className="flex justify-center items-center bg-slate-900 hover:bg-slate-800 border-2 border-mine-shaft-950 p-5 rounded"
      style={{ height: height, width: width }}
    >
      <span
        className="font-display text-mine-shaft-950"
        style={{ fontSize: fontSize ? fontSize : "1.5rem" }}
      >
        s.
      </span>
    </div>
  );
}
