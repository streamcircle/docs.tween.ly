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
                        { label: "Manage License", link: "/getting-started/manage-license/" },
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
                    items: [
                        {
                            label: "v1.6.0", link: "/release-notes/v160",
                            badge: { text: "current", variant: "success" }
                        },
                        { label: "v1.5.0", link: "/release-notes/v150" },
                        { label: "v1.4.4", link: "/release-notes/v144" },
                        { label: "v1.4.3", link: "/release-notes/v143" },
                        { label: "v1.4.2", link: "/release-notes/v142" },
                        { label: "v1.4.1", link: "/release-notes/v141" },
                        { label: "v1.4.0", link: "/release-notes/v140" },
                    ],
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
