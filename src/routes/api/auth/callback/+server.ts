import type { RequestHandler } from "../login/$types";

export const GET: RequestHandler = (event) => {
  console.log(event);
  return new Response(`${event}`);
};
