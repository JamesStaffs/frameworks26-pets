import Link from "next/link";
import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/pages";
interface Props {
params: Promise<{ slug: string }>;
}
export default async function ContentPage({
params,
}: Props) {
const { slug } = await params;
const page = getPageBySlug(slug);
if (!page) {
notFound();
}
return (
<main className="p-6">
<h1 className="text-3xl font-bold mb-4">
{page.title}
</h1>
<p className="mb-6">
{page.content}
</p>
<Link
href="/"
className="text-blue-600 underline"
>
Back to Home
</Link>
</main>
);
}