"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname() ?? "";
  const isDashboard = pathname === "/admin" || pathname.startsWith("/admin/");

  return (
    <>
      {!isDashboard && header}
      {children}
      {!isDashboard && footer}
    </>
  );
}