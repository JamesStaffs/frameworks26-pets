import Image from "next/image";
import Link from "next/link";
import type { AnimalType } from "@/lib/pets";
import { createSlug } from "@/lib/pets";

interface Props {
    animal: AnimalType;
}

export default function Petcard({ animal }: Props) {
    return (
        <div className="border rounded-lg p-4">
            <Link href={`/pets/${animal.animalID}`}>
                <h2 className="text-xl font-bold">
                    {animal.animalName}
                </h2>
                <Image
                    src={animal.animalPic}
                    alt={animal.animalName}
                    width={150}
                    height={150}
                />
                <p>Age: {animal.animalAge}</p>
                <p className="text-blue-600 underline">
                    View details
                </p>
            </Link>
        </div>
    );
}