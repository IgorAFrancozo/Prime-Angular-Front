import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {LoginComponent} from "../../pages/login/login.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonModule,
    DialogModule,
    LoginComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
