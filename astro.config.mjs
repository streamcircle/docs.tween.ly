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
                    label: "Getting started",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "Introduction", link: "/getting-started/introduction/" },
                        { label: "Create New Account", link: "/getting-started/create-new-account/" },
                        { label: "Wizard Tutorial", link: "/getting-started/wizard-tutorial/" },
                    ],
                },
                {
                    label: "User Guide",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "Application Overview", link: "/user-guide/application-overview/" },
                        { label: "Editor", link: "/user-guide/editor-overview/" },
                        { label: "Gallery", link: "/user-guide/gallery-overview/" },
                        { label: "Store", link: "/user-guide/store-overview/" },
                        { label: "Workspaces", link: "/user-guide/workspaces-overview/" },
                        { label: "Profile", link: "/user-guide/profile-overview/" },
                    ],
                },
                // {
                //     label: "User Guide",
                //     autogenerate: { directory: "user-guide" },
                // },
                {
                    label: "Release Notes",
                    collapsed: true,
                    autogenerate: { directory: "release-notes" },
                },
                {
                    label: "Appendices",
                    autogenerate: { directory: "appendices" },
                },
            ],
            customCss: ["@fontsource/roboto", "./src/tailwind.css"],
        }),
        tailwind({ applyBaseStyles: false }),
    ],
});
