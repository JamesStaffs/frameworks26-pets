export interface AnimalType {
    animalID: number;
    animalName: string;
    animalPic: string;
    animalAge: string;
    animalType: string;
    animalBreed: string;
}
export async function getAnimals(): Promise<AnimalType[]> {
    const res = await fetch(
        "http://localhost:3900/pets",
        {
            cache: "no-store",
            // change to just the below to refresh every hour
            // next: { revalidate: 3600 }
        }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch animals");
    }
    const animals: AnimalType[] = await res.json();
    return animals;
}

export async function getRandomAnimal():
    Promise<AnimalType | undefined> {
    const animals = await getAnimals();
    if (animals.length === 0) {
        return undefined;
    }
    const randomIndex = Math.floor(
        Math.random() * animals.length
    );
    return animals[randomIndex];
}

export async function getAnimalById(id: string): Promise<AnimalType
    | undefined> {
    const animals = await getAnimals();
    const numericId = Number(id);
    if (!Number.isInteger(numericId)) {
        return undefined;
    }
    return animals.find(
        (animal) => animal.animalID === numericId
    );
}
export function createSlug(name: string): string {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}
export async function getAnimalBySlug(
    slug: string
): Promise<AnimalType | undefined> {
    const animals = await getAnimals();
    return animals.find(
        (animal) => createSlug(animal.animalName) === slug
    );
}