"use server";

export async function someServerAction() {
  // POST request だけど next fetch で cache が効く
  const response = await fetch("http://localhost:3001/api", {
    method: "POST",
    next: { revalidate: 0 },
  });
  const data = await response.json();

  return data;
}
