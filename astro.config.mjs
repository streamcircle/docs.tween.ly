import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://docs.tween.ly",
    integrations: [
        starlight({
            title: "TWEENLY DOCS",
            social: {
                facebook: "https://www.facebook.com/app.tween.ly/",
                linkedin: "https://www.linkedin.com/company/tween-ly/",
                youtube: "https://www.youtube.com/@Tweenly",
            },
            sidebar: [
                {
                    label: "Getting Started",
                    items: [
                        { label: "Introduction", link: "/getting-started/introduction/" },
                        { label: "Installation", link: "/getting-started/installation/" },
                        { label: "Manage License", link: "/getting-started/manage-license/" },
                        { label: "Wizard Tutorial", link: "/getting-started/wizard-tutorial/" },
                        // { label: "Create Your First Graphics", link: "/getting-started/create-your-first-graphics/" },
                    ],
                },
                {
                    label: "Navigating Tweenly",
                    items: [
                        { label: "Application Overview", link: "/navigating-tweenly/application-overview" },
                        { label: "Editor", link: "/navigating-tweenly/editor-overview/" },
                        { label: "Gallery", link: "/navigating-tweenly/gallery-overview/" },
                        { label: "Store", link: "/navigating-tweenly/store-overview/" },
                        { label: "Workspaces", link: "/navigating-tweenly/workspaces-overview/" },
                        { label: "Profile", link: "/navigating-tweenly/profile-overview/" },
                    ],
                },
                {
                    label: "User Guide",
                    items: [
                        { label: "Graphics Files", link: "/user-guide/graphics-files/" },
                        { label: "Objects",
                            items: [
                                { label: "Tickers", link: "/user-guide/tickers/" },
                            ]
                        },
                        { label: "Assets",
                            items: [
                                { label: "Assets", link: "/user-guide/assets/" },
                                { label: "Image sequence", link: "/user-guide/image-sequence/" },
                                { label: "Data source", link: "/user-guide/data-source/" },
                            ]
                        },
                        { label: "Keyboard shortcuts", link: "/user-guide/keyboard-shortcuts/" },
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
                            label: "v1.11.0", link: "/release-notes/v1110",
                            badge: { text: "current", variant: "success" }
                        },
                        { label: "v1.10.2", link: "/release-notes/v1102" },
                        { label: "v1.10.1", link: "/release-notes/v1101" },
                        { label: "v1.9.3", link: "/release-notes/v193" },
                        { label: "v1.9.2", link: "/release-notes/v192" },
                        { label: "v1.9.0", link: "/release-notes/v190" },
                        { label: "v1.8.0", link: "/release-notes/v180" },
                        { label: "v1.7.0", link: "/release-notes/v170" },
                        { label: "v1.6.1", link: "/release-notes/v161" },
                        { label: "v1.6.0", link: "/release-notes/v160" },
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
                {
                    label: "Support & Contact",
                    link: "/support-and-contact/",
                },
            ],
            customCss: ["@fontsource/roboto", "./src/tailwind.css"],
        }),
        tailwind({ applyBaseStyles: false }),
    ],
});
