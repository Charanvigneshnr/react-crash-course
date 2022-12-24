import { useState } from "react";
export const Message = () => {
  const [message, setMessage] = useState("Hey Alien!");
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Adios!")}>Click for a Suprise!</button>
    </div>
  );
};
