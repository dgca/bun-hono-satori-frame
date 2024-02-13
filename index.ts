import { Hono } from "hono";

// Route handlers
import { handleGet } from "@/app/handleGet";
import { handlePost } from "@/app/handlePost";

const app = new Hono();

app.get("/", handleGet);
app.post("/", handlePost);

const port = process.env.port || 3030;
console.log(`Starting server on port ${port}...`);

Bun.serve({
  fetch: app.fetch,
  port,
});
