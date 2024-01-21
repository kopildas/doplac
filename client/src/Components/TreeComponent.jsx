import React from "react";
import SubTreeComponent from "./SubTreeComponent";
import PlusDesignOne from "./PlusDesignOne";

export default function TreeComponent({ treeData }) {
  return (
    <div>
      {treeData.map((node, index) => (
        <div key={index}>
          <div className="bg-red200 font-semibold w-80 h-14 rounded-xl border border-zinc-200 flex items-center justify-center">
            {node.title}
          </div>

          {node.child ? (
            <SubTreeComponent subTreeData={node.child} />
          ) : (
            <PlusDesignOne />
          )}
        </div>
      ))}
    </div>
  );
}
