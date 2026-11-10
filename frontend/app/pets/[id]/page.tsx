import Image from "next/image";
import { getAnimalById } from "@/lib/pets";
// import { getAnimalBySlug } from "@/lib/pets";

export default async function AnimalDetailPage(props: {params:
Promise<{ id: string }>;})
{
// await props.params because it's a Promise in Next.js 14/15
const params = await props.params;
// get the id from the URL
const id = params.id;
// const slug = params.slug;
const animal = await getAnimalById(id);
// const animal = await getAnimalBySlug(slug)

if (!animal) {
return <p>Animal not found.</p>;
}
return (
<div>
<h1>{animal.animalName}</h1>
<Image
src={animal.animalPic}
alt={animal.animalName}
width={300}
height={300}
/>
<p>Age: {animal.animalAge}</p>
<p>Type: {animal.animalType}</p>
<p>Breed: {animal.animalBreed}</p>
<p>ID: {animal.animalID}</p>
</div>
);
}