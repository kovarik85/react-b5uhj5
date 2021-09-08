import React from "react";


export default function Skeleton(props) {
  return (
    <div>
     <div className="skeleton">{props.children}</div>
    </div>
  );
}

export default Skeleton