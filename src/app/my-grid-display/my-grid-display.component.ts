import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'my-grid-display',
  templateUrl: './my-grid-display.component.html',
  styleUrls: ['./my-grid-display.component.css']
})
export class MyGridDisplayComponent implements OnInit {

  @Input()
  page_size:number = 0;

  @Input()
  elements:any[] = [];

  first_id:number = 0;
  last_id:number = 0;
  first_page:number = 0;
  current_page:number = 0;
  last_page:number = 0;

  buttonFirst:boolean = true;
  buttonPrev:boolean = true;
  buttonNext:boolean = true;
  buttonLast:boolean = true;

  error:boolean = false;
  errorMsg:string = "";

  constructor() {}

  ngOnInit(): void {
    if(this.elements.length == 0){
      this.error = true;
      this.errorMsg = "The list is empty!";
    }
    else if (this.page_size < 1) {
      this.error = true;
      this.errorMsg = "The page size must be at least 1!";
    }
    else if (this.page_size > this.elements.length) {
      this.error = true;
      this.errorMsg = "The page size exceeds the number of elements in the list!";
    }
    else {
      this.error = false;

      this.first_page = 1;
      this.current_page = 1;
      this.last_page = Math.round(this.elements.length / this.page_size);
      if (this.elements.length - (this.last_page * this.page_size) > 0) {
        this.last_page += 1;
      }
      this.computeIdsAndButtons();
    }
  }

  /**
   * changes the values needed for the current page to be correctly shown
   */
  computeIdsAndButtons(): void {

    // fist and last id -> the elements that are going to be displayed
    this.first_id = (this.current_page - 1) * this.page_size;
    this.last_id = Math.min(((this.current_page * this.page_size) - 1),this.elements.length - 1);

    // what buttons are going to be available
    if(this.current_page == this.first_page){
      this.buttonFirst = true;
      this.buttonPrev = true;
    }
    else {
      this.buttonFirst = false;
      this.buttonPrev = false;
    }

    if(this.current_page == this.last_page){
      this.buttonNext = true;
      this.buttonLast = true;
    }
    else {
      this.buttonNext = false;
      this.buttonLast = false;
    }
  }

  /**
   * when first page button is pressed
   */
  firstPage(): void {

    this.current_page = this.first_page;
    this.computeIdsAndButtons();
  }

  /**
   * when previous page button is pressed
   */
  previousPage(): void {

    if(this.current_page > this.first_page){
      this.current_page -= 1;
      this.computeIdsAndButtons();
    }
  }

  /**
   * when next page button is pressed
   */
  nextPage(): void {

    if(this.current_page < this.last_page){
      this.current_page += 1;
      this.computeIdsAndButtons();
    }
  }

  /**
   * when last page button is pressed
   */
  lastPage(): void {

    this.current_page = this.last_page;
    this.computeIdsAndButtons();
  }

  /**
   * when a page button is pressed, the current page is change to that page
   * @param page the new current page
   */
  moveToPage(page: number): void {
    if(this.current_page != page){
      this.current_page = page;
      this.computeIdsAndButtons();
    }
  }

  /**
   * returns the list of indexes of the elements in the current page
   */
  arrayOfIndexes(): number[] {
    const result: number[] = [];
    for (let i = this.first_id; i <= this.last_id ; i++){
      result.push(i);
    }
    return result;
  }

  /**
   * returns the list of pages for the buttons with numbers
   */
  arrayOfPages(): number[] {
    const result: number[] = [];
    for (let i = Math.max(this.first_page, this.current_page - 2) ; i <= Math.min(this.current_page + 2, this.last_page); i++){
      result.push(i);
    }
    return result;
  }

  /**
   * to make the current page button inactive
   * @param page the page number
   */
  isPageCurrentPage(page: number) : boolean {
    return this.current_page == page;
  }
}
