import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Cloudflare Wrangler deploy လုပ်တဲ့အခါ Error မတက်အောင် လိုအပ်လို့ ထည့်ထားခြင်းဖြစ်သည်
  plugins: [],

  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});