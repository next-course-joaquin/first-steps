"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface ActiveLinkProps {
    path: string;
    icon?: React.ReactNode;
    label: string;
}

export function ActiveLink({ path, icon, label }: ActiveLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === path;

    return (
        <Link 
            href={path} 
            className={`flex items-center gap-2 ${isActive ? "text-primary" : "text-muted-foreground"}`} 
            aria-current={isActive ? "page" : undefined}
        >
            {icon && icon} {label}
        </Link>
    );
}