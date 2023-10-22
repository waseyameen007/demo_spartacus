import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductIntroComponent } from './custom-product-intro.component';

describe('CustomProductIntroComponent', () => {
  let component: CustomProductIntroComponent;
  let fixture: ComponentFixture<CustomProductIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProductIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should sort the array by the given key', () => {
    const array = [
      { id: 2, name: 'John' },
      { id: 1, name: 'Alice' },
      { id: 3, name: 'Bob' },
    ];
    const sortedArray = component.sortArray(array, 'id');
    expect(sortedArray).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'John' },
      { id: 3, name: 'Bob' },
    ]);
  });

  it('should not modify the original array', () => {
    const array = [
      { id: 2, name: 'John' },
      { id: 1, name: 'Alice' },
      { id: 3, name: 'Bob' },
    ];
    component.sortArray(array, 'id');
    expect(array).toEqual([
      { id: 2, name: 'John' },
      { id: 1, name: 'Alice' },
      { id: 3, name: 'Bob' },
    ]);
  });
});describe('CustomProductIntroComponent', () => {
  // existing code

  describe('sortArray', () => {
    
  });
});