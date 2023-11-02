const url_create = "https://fastapi-gd0b.onrender.com/api/user/";

export async function userCreate(data) {
  const response = await fetch(url_create, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}
