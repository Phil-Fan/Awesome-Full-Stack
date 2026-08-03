"use client";

import type { ReactNode } from "react";
import type { PageTree } from "fumadocs-core/server";
import {
  SidebarFolder as SidebarFolderPrimitive,
  SidebarFolderContent,
  SidebarFolderLink,
  SidebarFolderTrigger,
} from "fumadocs-ui/components/layout/sidebar";
import { useTreePath } from "fumadocs-ui/provider";
import { useState } from "react";

export function SidebarFolder({
  item,
  level,
  children,
}: {
  item: PageTree.Folder;
  level: number;
  children: ReactNode;
}) {
  const path = useTreePath();
  const [defaultOpen] = useState(
    () => (item.defaultOpen ?? false) || path.includes(item),
  );

  return (
    <SidebarFolderPrimitive defaultOpen={defaultOpen}>
      {item.index ? (
        <SidebarFolderLink
          href={item.index.url}
          external={item.index.external}
        >
          {item.icon}
          {item.name}
        </SidebarFolderLink>
      ) : (
        <SidebarFolderTrigger>
          {item.icon}
          {item.name}
        </SidebarFolderTrigger>
      )}
      <SidebarFolderContent>{children}</SidebarFolderContent>
    </SidebarFolderPrimitive>
  );
}
