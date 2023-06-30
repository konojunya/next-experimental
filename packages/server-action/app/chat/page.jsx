"use client";

import {
  useRef,
  useState,
  // experimental_useOptimistic as useOptimistic,
} from "react";
import { send } from "./actions";

export default function () {
  const formRef = useRef();
  const [messages, setMessages] = useState([]);
  // const [optimisticMessages, addOptimisticMessage] = useOptimistic(
  //   messages,
  //   (state, newMessage) => [...state, { message: newMessage, sending: true }]
  // );

  const action = async (formData) => {
    formRef.current.reset();
    // addOptimisticMessage(formData.get("message"));
    const res = await send(formData);
    setMessages(res.messages);
  };

  return (
    <div>
      <form action={action} ref={formRef}>
        <input type="text" name="message" placeholder="input your message..." />
      </form>
      <ul>
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </div>
  );
}
