export class Jeu {
    #id;
    title;
    description;
    studio;
    image;
    finished;


    constructor(id, title, description, studio, image, finished) {
        this.#id = id;
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

