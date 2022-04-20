import { Subject } from 'rxjs';

export class LibrosService {
  librosSubject = new Subject();

  private libros = ['Mi libro xd', 'Libro de Aritmetica', 'Libro José'];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    // añadimos un nuevo libro al final del arreglo
    this.librosSubject.next(null);
  }

  obtenerLibros() {
    return [...this.libros];
    // este operador [...] devuelve el array existente + los cambios que se le están haciendo
  }

  eliminarLibro(libroNombre: string) {
    this.libros = this.libros.filter((x) => x !== libroNombre);
    this.librosSubject.next(null);
  }
}
