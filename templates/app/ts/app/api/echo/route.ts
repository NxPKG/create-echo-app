import { serve } from "@teleflow/echo/next";
import { echo } from "../../echo/client";

export const { GET, POST, PUT } = serve({ client: echo });
