"use server";

export async function send(formData) {
  const message = formData.get("message");

  const res = await fetch("http://localhost:3001/chat/api", {
    method: "POST",
    body: JSON.stringify({ message }),
    next: { revalidate: 0 },
  });

  const data = await res.json();

  return {
    ok: res.ok,
    messages: data.messages,
  };
}
