"use client";

import { useReducer, useState, useTransition } from "react";
import { someServerAction } from "./actions";

export default function () {
  const [isPending, startTransition] = useTransition();
  const [now, setNow] = useState(0);
  const [isClicked, toggle] = useReducer((s) => !s, false);

  const onClick = () => {
    toggle();
    startTransition(async () => {
      const data = await someServerAction();
      setNow(data.now);
    });

    setTimeout(toggle, 100);
  };

  return (
    <div>
      <h1>Server Action</h1>
      <p>isPending: {isPending ? "true" : "false"}</p>
      <p>isClicked: {isClicked ? "true" : "false"}</p>

      <p>
        {new Intl.DateTimeFormat("ja-JP-u-ca-japanese", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }).format(new Date(now))}
      </p>

      <button onClick={onClick}>click</button>
    </div>
  );
}
