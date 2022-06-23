import React from "react";
import { useEffect, useState } from "react";

interface Props {
  getItems: () => number[];
  incrementor?: number;
}


const List: React.FC<Props> = ({ getItems }) => {
  const [items, setItems] = useState<number[]>([]);
　console.log("List rendered!")
  useEffect(() => {
    setItems(getItems());
    console.log("Updating Items");
  }, [getItems,]);

  return (
    <div className="m-2">
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default React.memo(List);
