import type { ImgHTMLAttributes } from "react";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

function Img(props: ImgHTMLAttributes<HTMLImageElement>) {
  // 图片为外链图床且未做尺寸探测，用原生 img 避免 next/image 要求 width/height
  return <img loading="lazy" decoding="async" {...props} alt={props.alt ?? ""} />;
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    img: Img,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
