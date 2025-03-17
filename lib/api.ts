const BASE_API_URL = process.env.API_URL;
export async function fetchSections() {
  const res = await fetch(`${BASE_API_URL}/fetch-sections`);
  return res.json();
}

export async function createNote(data: any){
  const response = await fetch(`${BASE_API_URL}/create-note`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-SECRET": "841b346c2586f50686825c607b470b69140df3f666ebf520223b8d36f9b2c850"
    },
    body: JSON.stringify(data),
  });

  return response;
}