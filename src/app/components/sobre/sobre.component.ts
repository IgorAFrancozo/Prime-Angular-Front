import { Component } from '@angular/core';
import {AnimateOnScrollModule} from "primeng/animateonscroll";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [
    AnimateOnScrollModule
  ],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
