const url_create = "http://127.0.0.1:8000/api/user/";

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
