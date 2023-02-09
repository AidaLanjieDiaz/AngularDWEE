import {Libro} from './Libro';

export class Escritor {

    constructor(public id:number, public nombre:string, public fecha:Date, 
                public libros:Libro[]) {
    }

}
