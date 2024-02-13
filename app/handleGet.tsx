import { routeHandler } from "@/lib/routeHandler";
import { rootFrameContent } from "./shared/rootFrameContent";

export const handleGet = routeHandler(async (c) => {
  return c.html(rootFrameContent);
});
