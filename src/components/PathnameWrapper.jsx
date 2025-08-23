"use client";

import { usePathname } from "next/navigation";

export default function PathnameWrapper({ children }) {
  const pathname = usePathname();

  return children(pathname);
}