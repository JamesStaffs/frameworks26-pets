import Petcard from "@/components/petcard";
import { getAnimals } from "@/lib/pets";
export default async function Animal() {
    const animals = await getAnimals();
    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-6">
                Our Animals
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {animals.map((animal) => (
                    <Petcard
                        key={animal.animalID}
                        animal={animal}
                    />
                ))}
            </div>
        </main>
    );
}