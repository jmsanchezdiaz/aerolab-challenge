import { Product } from "../interfaces/interfaces";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU2NzA0ODgzOTQ5MDAwMjExZjNiMjIiLCJpYXQiOjE2MzMwNTQ3OTJ9.hTL6w62XaxJGJksvZo1yUnoa7ekSwpvl0CMjAn9p9Y0";

export const getProducts = async (): Promise<Product[]> => {
  const req = await fetch("https://coding-challenge-api.aerolab.co/products", {
    method: "GET",
    headers: {
      Authorization: ` Bearer ${TOKEN}`,
    },
  });
  return await req.json();
};
