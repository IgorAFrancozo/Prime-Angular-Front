import { Component } from '@angular/core';
import {AnimateOnScrollModule} from "primeng/animateonscroll";

@Component({
  selector: 'app-mais-procurados',
  standalone: true,
  imports: [
    AnimateOnScrollModule
  ],
  templateUrl: './mais-procurados.component.html',
  styleUrl: './mais-procurados.component.scss'
})
export class MaisProcuradosComponent {

}
