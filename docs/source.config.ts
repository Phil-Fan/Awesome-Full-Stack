import { defineConfig } from "fumadocs-mdx/config";

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
      fallbackLanguage: "text",
    },
    // 图片全部为外链图床，禁用构建时远程图片尺寸探测
    remarkImageOptions: false,
  },
});
