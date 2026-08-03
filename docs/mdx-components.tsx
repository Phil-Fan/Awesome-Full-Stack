import type { ImgHTMLAttributes } from "react";
import type { MDXComponents } from "mdx/types";
import defaultMdxComponents from "fumadocs-ui/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
      <img {...props} loading="lazy" />
    ),
    ...components,
  };
}
