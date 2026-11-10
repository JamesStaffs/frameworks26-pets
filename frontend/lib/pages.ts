import pages from "@/data/pages.json";

export interface PageType {
    title: string;
    slug: string;
    content: string;
}

export function getPages(): PageType[] {
    return pages;
}

export function getPageBySlug(slug: string): PageType | undefined {
    return pages.find(
        (page) => page.slug === slug
    );
}