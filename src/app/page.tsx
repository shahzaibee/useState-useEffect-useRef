"use client";
import React, { useEffect, useState, useRef } from "react";

const Page = () => {
  const [count, setCount] = useState(0);
  const [alertShown, setAlertShown] = useState(false);
  const prevCountRef = useRef(0);

  useEffect(() => {
    if (count > prevCountRef.current && !alertShown) {
      alert(`CLICKED ON INCREAMENT BUTTON : Your count value is ${count}`);
      setAlertShown(true);
    } else if (count < prevCountRef.current && !alertShown) {
      alert(`CLICKED ON DECREAMENT BUTTON : Your count value is ${count}`);
      setAlertShown(true);
    }
    prevCountRef.current = count;
  }, [count, alertShown]);

  // Reset alertShown when count changes
  useEffect(() => {
    setAlertShown(false);
  }, [count]);

  return (
    <div className="flex flex-col py-60 min-h-screen bg-rose-300">
      <div className="flex justify-center font-bold text-[36px]">{count}</div>
      <div className="flex justify-center py-3 gap-x-10">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-600 p-3 text-[18px] font-bold rounded-lg"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-600 p-3 text-[18px]  font-bold rounded-lg"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Page;
