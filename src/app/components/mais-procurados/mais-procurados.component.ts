import { Component } from '@angular/core';
import { AnimateOnScrollModule } from "primeng/animateonscroll";
import { NgOptimizedImage } from "@angular/common";
import { TagModule } from "primeng/tag";
import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";

class Product {
  id: number = 0; // Initializer provided
  name: string = ''; // Initializer provided
  image?: string; // Optional property
  price?: number; // Optional property
  inventoryStatus?: string; // Optional property
}


@Component({
  selector: 'app-mais-procurados',
  standalone: true,
  imports: [
    AnimateOnScrollModule,
    NgOptimizedImage,
    TagModule,
    ButtonModule,
    CarouselModule
  ],
  templateUrl: './mais-procurados.component.html',
  styleUrls: ['./mais-procurados.component.scss']
})
export class MaisProcuradosComponent {
  products: Product[] = [];

  responsiveOptions: any[] = [];

  constructor() {}

  ngOnInit() {

    this.products = [
      { id: 1, name: 'Product 1', price: 10, image: 'assets/chapagne.svg', inventoryStatus: 'INSTOCK' },
      { id: 2, name: 'Product 2', price: 20, image: 'assets/mojito.svg', inventoryStatus: 'LOWSTOCK' },
      { id: 3, name: 'Product 3', price: 30, image: 'assets/wine.svg', inventoryStatus: 'OUTOFSTOCK' },
      { id: 4, name: 'Product 4', price: 30, image: 'assets/wine.svg', inventoryStatus: 'OUTOFSTOCK' },
      { id: 5, name: 'Product 5', price: 30, image: 'assets/wine.svg', inventoryStatus: 'OUTOFSTOCK' },
      { id: 6, name: 'Product 6', price: 30, image: 'assets/wine.svg', inventoryStatus: 'OUTOFSTOCK' }

    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
