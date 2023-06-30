import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3001/api", {
    next: { revalidate: 0 },
    // cache: "no-cache" を指定したとしても revalidate: 0 に normalize されるので最初から revalidate: 0 でいい
    // ref: https://github.com/vercel/next.js/blob/0dd225b1285d5ca31060d807d3f7077ece62e9c4/packages/next/src/server/lib/patch-fetch.ts#L85
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export default async function () {
  const data = await getData();

  return (
    <div>
      <h1>{data.message}</h1>
      <h2>
        {new Intl.DateTimeFormat("ja-JP-u-ca-japanese", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }).format(new Date(data.now))}
      </h2>
      <div style={{ display: "grid", columns: 1 }}>
        <Link href="/about">/about</Link>
        <Link href="/client">/client</Link>
      </div>
    </div>
  );
}
