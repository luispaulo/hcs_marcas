// vite.config.ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
var vite_config_default = defineConfig({
  tanstackStart: {
    target: process.env.VERCEL ? "vercel" : void 0
  }
});
export {
  vite_config_default as default
};
