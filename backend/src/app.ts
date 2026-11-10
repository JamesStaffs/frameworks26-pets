import express, { type Express, type Request, type Response } from 'express'; 

const app: Express = express();
app.use(express.static('public'));
app.use(express.json());

const port: number = 3900;

export interface AnimalType {
    animalID: number;
    animalName: string;
    animalPic: string;
    animalAge: string;
    animalType: string;
    animalBreed: string;
}

let pets: AnimalType[] = [
    {
        animalID: 1,
        animalName: "Paddy",
        animalPic: "https://fi67.github.io/JsonData/images/falcor.jpg",
        animalAge: "15",
        animalType: "Dog",
        animalBreed: "",
    },
    {
        animalID: 2,
        animalName: "Growler",
        animalPic: "https://fi67.github.io/JsonData/images/jemima.jpg",
        animalAge: "6",
        animalType: "Dog",
        animalBreed: "Miniature Italian Greyhound"
    }
];

app.get('/', (req: Request, res: Response) => { 
    res.send('Hello World!!!'); 
});

app.get('/pets', (req: Request, res: Response) => { 
    res.send(pets);
});

app.get('/pets/search', (req: Request, res: Response) => {
    const name: String = new String(req.query.name).toLowerCase();

    if(name == "undefined") {
        return res.status(400).send({
            error: true,
            message: "Pet cannot be found with the specified name"
        });
    }

    const results = pets.filter((pet) => {
        return pet.animalName.toLowerCase() == name;
    });

    res.send(results);
});

app.get('/pets/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const pet = pets.find((pet) => {
        return pet.animalID == id;
    });

    if (pet) {
        return res.send(pet);
    }

    return res.status(404).send({
        error: true,
        message: "Pet cannot be found with the specified ID"
    });
});

app.delete('/pets/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    pets = pets.filter((pet) => {
        return pet.animalID != id;
    });

    return res.status(200).send({
        success: true
    });
});

app.post('/pets', (req: Request, res: Response) => {
    console.log(req.body);
    
    // TODO: validation

    const pet: AnimalType = {
        animalID: pets.length + 1,
        animalName: req.body.animalName,
        animalType: req.body.animalType,
        animalBreed: req.body.animalBreed,
        animalAge: req.body.animalAge,
        animalPic: req.body.animalPic,
    };
    console.log(pet);

    pets.push(pet);
    res.send(pet);
});

app.listen(port, () => { 
    console.log(`Listening on http://localhost:${port}`); 
});