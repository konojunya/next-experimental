"use client";

import Link from "next/link";
import { useState } from "react";

export default function () {
  const [number, setNumber] = useState(0);

  const onClick = () => {
    // この fetch はサーバーコンポーネントの fetch ではないので force-cache されず、 dynamic になる
    // ref: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
    fetch("http://localhost:3001/api/heavy", { next: { cache: "force-cache" } })
      .then((res) => res.json())
      .then((data) => {
        setNumber(data);
      });
  };

  return (
    <div>
      <h1>client component</h1>
      <p>{number}</p>
      <button onClick={onClick}>get random number</button>

      <div style={{ display: "grid", columns: 1 }}>
        <Link href="/">/</Link>
      </div>
    </div>
  );
}
