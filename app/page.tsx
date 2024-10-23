"use client";

import { counterV1, counterV2 } from "@/stores/counter";
import { reaction } from "mobx";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-row gap-4 items-center justify-center min-h-screen py-2">
      <CounterV1 />
      <CounterV2 />
      <StateCounter />
    </div>
  );
}

const CounterV1 = observer(() => {
  useEffect(() => {
    reaction(
      () => counterV1.counter.count,
      (count) => {
        console.log(`Counter V1 count updated: ${count}`);
      }
    );
  }, []);

  useEffect(() => {
    console.log("Computed value updated");
  }, [counterV1.mul5]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 border p-4">
      <h1 className="text-2xl">Counter V1</h1>
      <p>Count: {counterV1.counter.count}</p>
      <p>Updated At: {counterV1.counter.updatedAt.toString()}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={counterV1.increment}
      >
        Increment
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={counterV1.decrement}
      >
        Decrement
      </button>
    </div>
  );
});

const CounterV2 = observer(() => {
  useEffect(() => {
    console.log("Counter V2 updated");
  }, [counterV2.counter]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 border p-4">
      <h1>Counter V2</h1>
      <p>Count: {counterV2.counter.count}</p>
      <p>Updated At: {counterV2.counter.updatedAt.toString()}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={counterV2.increment}
      >
        Increment
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={counterV2.decrement}
      >
        Decrement
      </button>
    </div>
  );
});

const StateCounter = () => {
  const [counter, setCounter] = useState({
    count: 0,
    updatedAt: new Date(),
  });

  useEffect(() => {
    console.log("Use State Counter updated");
  }, [counter]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 border p-4">
      <h1>Counter</h1>
      <p>Count: {counter.count}</p>
      <p>Updated At: {counter.updatedAt.toString()}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() =>
          setCounter({
            count: counter.count + 1,
            updatedAt: new Date(),
          })
        }
      >
        Increment
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() =>
          setCounter({
            count: counter.count - 1,
            updatedAt: new Date(),
          })
        }
      >
        Decrement
      </button>
    </div>
  );
};
