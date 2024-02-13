import { type Context } from "hono";

export function routeHandler<T extends (c: Context) => Promise<Response>>(
  cb: T
) {
  return cb;
}
