import * as dotenv from "dotenv";
dotenv.config({});

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function fetchSections() {
  const res = await fetch(`${BASE_API_URL}/notes/fetch-sections`);
  return res.json();
}

export async function fetchNote(noteId: string) {
  const response = await fetch(`${BASE_API_URL}/notes/fetch-note/${noteId}`);
  if (!response.ok) {
    throw new Error("Failed to process request");
  }

  return response.json();
}

export async function makeRequest(
  data: Record<string, unknown>,
  route: string
) {
  const url = `${BASE_API_URL}${route}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-SECRET":
        "841b346c2586f50686825c607b470b69140df3f666ebf520223b8d36f9b2c850",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to process request");
  }

  return response;
}

export async function updateObject(objectId: string, properties: any) {
  try {
    const response = await fetch(`${BASE_API_URL}/objects/${objectId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-API-SECRET":
          "841b346c2586f50686825c607b470b69140df3f666ebf520223b8d36f9b2c850",
      },
      body: JSON.stringify({
        properties,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update object");
    }
  } catch (error) {
    console.error("Error updating object:", error);
  }
}

export async function deleteObject(objectId: string) {
  try {
    const response = await fetch(`${BASE_API_URL}/objects/${objectId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-API-SECRET":
          "841b346c2586f50686825c607b470b69140df3f666ebf520223b8d36f9b2c850",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error("Failed to delete object");
    }
  } catch (error) {
    console.error("Error deleting object:", error);
  }
}
