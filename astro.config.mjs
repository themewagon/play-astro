import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.themewagon.com',
  base: '/play-astro',
  output: 'static',
  integrations: [tailwind(), compress(),]
});