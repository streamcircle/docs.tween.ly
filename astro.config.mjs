import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://docs.tween.ly",
    integrations: [
        starlight({
            title: "Tweenly Docs",
            social: {
                facebook: "https://www.facebook.com/app.tween.ly/",
                instagram: "https://www.instagram.com/app.tween.ly/",
                linkedin: "https://www.linkedin.com/company/tween-ly/",
                youtube: "https://www.youtube.com/@Tweenly",
            },
            sidebar: [
                {
                    label: "Guides",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "Example Guide", link: "/guides/example/" },
                    ],
                },
                {
                    label: "Reference",
                    autogenerate: { directory: "reference" },
                },
            ],
            customCss: ["@fontsource/roboto", "./src/tailwind.css"],
        }),
        tailwind({ applyBaseStyles: false }),
    ],
});
