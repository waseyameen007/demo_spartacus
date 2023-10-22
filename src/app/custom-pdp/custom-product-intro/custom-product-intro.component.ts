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

  bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;
  
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] == arr[i + 1]) {
          // Swap arr[i] and arr[i+1]
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
}
