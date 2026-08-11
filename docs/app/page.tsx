import Link from "next/link";
import type { Folder } from "fumadocs-core/page-tree";
import { source } from "@/lib/source";

export default function HomePage() {
  const sections = source.getPageTree().children.filter(
    (node): node is Folder => node.type === "folder",
  );

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold">Awesome Full Stack</h1>
      <p className="mt-3 text-fd-muted-foreground">
        全栈开发资源与知识库：AI、前端、后端、云原生、运维、工具、产品与运营。
      </p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sections.map((section) => {
          const target = section.index?.url;
          if (!target) return null;

          return (
            <Link
              key={section.$id}
              href={target}
              className="rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:border-fd-primary/50"
            >
              <h2 className="font-semibold">{section.name}</h2>
              {section.description ? (
                <p className="mt-1 text-sm text-fd-muted-foreground">
                  {section.description}
                </p>
              ) : null}
            </Link>
          );
        })}
      </div>
    </main>
  );
}
