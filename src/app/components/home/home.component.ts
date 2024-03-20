import { Component } from '@angular/core';
import {CategoriasComponent} from "../categorias/categorias.component";
import {HeaderComponent} from "../header/header.component";
import {MaisProcuradosComponent} from "../mais-procurados/mais-procurados.component";
import {SobreComponent} from "../sobre/sobre.component";
import {MainPageComponent} from "../main-page/main-page.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CategoriasComponent,
    HeaderComponent,
    MaisProcuradosComponent,
    SobreComponent,
    MainPageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
