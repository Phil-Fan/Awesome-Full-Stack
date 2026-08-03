import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { SidebarFolder } from "@/app/sidebar-folder";

export const baseOptions: Omit<DocsLayoutProps, "tree"> = {
  nav: {
    title: "Awesome Full Stack",
  },
  githubUrl: "https://github.com/Phil-Fan/Dev-Notes",
  sidebar: {
    components: {
      Folder: SidebarFolder,
    },
  },
};
