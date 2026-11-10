import Link from "next/link";
import Petcard from "@/components/petcard";
import { getRandomAnimal } from "@/lib/pets";
export const dynamic = "force-dynamic";
export default async function Home() {
const animal = await getRandomAnimal();
return (
<main className="p-6">
<h1 className="text-3xl font-bold mb-4">
Getting data
</h1>
<p className="mb-6">
Welcome to our Next.js website.
Meet one of our pets!
</p>
<h2 className="text-2xl font-bold mb-4">
  Featured Pet
</h2>
{animal ? (
<div className="max-w-sm mb-6">
<Petcard animal={animal} />
</div>
) : (
<p>No pets are available.</p>
)}
<Link
href="/pets"
className="text-blue-600 underline"
>
View all animals
</Link>
</main>
);
}