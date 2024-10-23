import { CounterV1 } from "@/stores/counter";
import { useState } from "react";

const useCounter = () => {
  const [counter] = useState(new CounterV1());

  return counter;
};

export default useCounter;
