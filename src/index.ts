import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
  await new Promise((resolve) => setTimeout(() => resolve(0), 0));
  return c.text("Hello Hono!");
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
