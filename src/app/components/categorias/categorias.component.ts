import {Component} from '@angular/core';
import {AnimateOnScrollModule} from "primeng/animateonscroll";

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [
    AnimateOnScrollModule
  ],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent {

}
