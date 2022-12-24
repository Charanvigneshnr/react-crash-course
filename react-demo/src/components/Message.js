import { useState } from "react";
export const Message = () => {
  const [message, setMessage] = useState("Vanakkam da maple!");
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Nakku!")}>Click for a Suprise!</button>
    </div>
  );
};
