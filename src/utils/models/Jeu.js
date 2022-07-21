export class Jeu {
    #id;
    title;
    description;
    studio;
    image;
    finished;
    static count = 0;


    constructor(title, description, studio, image, finished = false) {
        Jeu.count++;
        this.#id = Jeu.count;
        this.title = title;
        this.description = description;
        this.studio = studio;
        this.image = image;
        this.finished = finished;
    }

    get id() {
        return this.#id;
    }
}

