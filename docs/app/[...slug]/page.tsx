import { notFound } from "next/navigation";
import { DocsBody, DocsPage } from "fumadocs-ui/page";
import { source } from "@/lib/source";
import { useMDXComponents } from "@/mdx-components";

export default async function Page(
  props: PageProps<"/[...slug]">,
) {
  const params = await props.params;

  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} footer={{ enabled: false }}>
      <DocsBody>
        <MDXContent components={useMDXComponents({})} />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}
