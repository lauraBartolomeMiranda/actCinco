import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  noticias: INoticia[] = []; //array tipado interfaz

  // para guardar la nueva noticia de formulario
  nuevaNoticia: INoticia = {
    titulo: '',
    imagenUrl: '',
    descripcion: '',
    fecha: '',
  };

  ngOnInit(){
    this.noticias = [
      {
        titulo: 'Lanzamiento de Sual!',
        descripcion: 'La nueva marca de accesorios y complementos.',
        imagenUrl: 'https://static.wixstatic.com/media/d40e1d_54565193a2034ae1843c5bebb5d32272~mv2.png/v1/fill/w_980,h_654,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/d40e1d_54565193a2034ae1843c5bebb5d32272~mv2.png',
        fecha: '2023-06-17'
      },
      {
        titulo: '¿Es sual la nueva competencia de Parfois?',
        descripcion: 'Un análisis sobre la popularidad de sual...',
        imagenUrl: 'https://img.freepik.com/vector-gratis/complementos-moda-mujer_1114-8.jpg',
        fecha: '2024-01-12'
      }
    ];
    console.log('array noticias:', this.noticias)

    this.verNoticias() //ver noticias inicales
  }


//mostrar las noticias en el html
verNoticias(){
  document.getElementById('contNoticia')!.innerHTML = this.generarNoticias(); //ojo dom!!
}

//estructurar la noticia
generarNoticias(): string {
  return this.noticias.reduce((docu, noticia) => docu + `
    <div class="noticia">
      <h3>${noticia.titulo}</h3>
       <img src="${noticia.imagenUrl}"> <!--controlar tamaño-->
      <p>${noticia.descripcion}</p>
      <h5>${noticia.fecha}</h5>
      <hr>
  </div>
  `, '');
}

//necesito recoger la informacion introducida obj nuevaNoticia
AnyadeNoticia() {
  //comprobar campos vacios
  if (!this.nuevaNoticia.titulo || !this.nuevaNoticia.imagenUrl || !this.nuevaNoticia.descripcion || !this.nuevaNoticia.fecha){
    alert('completa todos los campos para continuar');
    return
  } 

  //agrega noticia a array
  this.noticias.push({ 
    ...this.nuevaNoticia, });
    console.log(this.nuevaNoticia);

    //añadir la noticia al html
    this.verNoticias();

  //limpiar el formulario  
  this.nuevaNoticia = {titulo:"", imagenUrl: "", descripcion:"", fecha:"",}
};


}
