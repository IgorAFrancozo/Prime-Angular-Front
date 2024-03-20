import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
