import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-product-intro',
  templateUrl: './custom-product-intro.component.html',
  styleUrls: ['./custom-product-intro.component.scss']
})
export class CustomProductIntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  // create a soprt function to sort the array of objects
  sortArray(array: any[], key: string) {
    return array.sort((a, b) => {
      return a[key] - b[key];
    });
  }
}
