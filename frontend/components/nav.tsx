"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navigation from "@/data/navigation.json";
import pages from "@/data/pages.json";
export default function Nav() {
    const pathname = usePathname();

    // Convert content pages into navigation links
    const pageLinks = pages.map((page) => ({
        title: page.title,
        href: `/pages/${page.slug}`,
    }));

    // Combine ordinary links and content page links
    const allLinks = [...navigation, ...pageLinks];

    return (
        <nav className="sticky top-0">
            <ul className="flex flex-wrap bg-orange-400">
                {allLinks.map((item) => {
                    const isActive = pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(`${item.href}/`));
                        
                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`block p-4 hover:bg-indigo-400 ${isActive
                                        ? "bg-amber-950 text-white"
                                        : "text-black"
                                    }`}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}