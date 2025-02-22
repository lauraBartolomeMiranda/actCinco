import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  noticias: INoticia[] = []; //array tipado interfaz

  ngOnInit(){
    this.noticias = [
      {
        titulo: 'Lanzamiento de Sual!',
        descripcion: 'La nueva marca de accesorios y complementos.',
        fecha: '2023-06-17'
      },
      {
        titulo: '¿Es sual la nueva competencia de Parfois?',
        descripcion: 'Un análisis sobre la popularidad de sual...',
        fecha: '2024-01-12'
      }
    ];
    console.log('array noticias:', this.noticias)
  }
  
}
