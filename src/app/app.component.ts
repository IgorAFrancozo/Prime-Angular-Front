import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {HomeComponent} from "./components/home/home.component";
import {MaisProcuradosComponent} from "./components/mais-procurados/mais-procurados.component";
import {CategoriasComponent} from "./components/categorias/categorias.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, MaisProcuradosComponent, CategoriasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Prime-Angular';
}
