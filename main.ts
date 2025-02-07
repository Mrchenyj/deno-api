import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

   serve(async (req) => {
     return new Response("Hello from Deno Deploy!");
   });
