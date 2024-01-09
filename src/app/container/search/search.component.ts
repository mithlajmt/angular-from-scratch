import { Component, ElementRef, EventEmitter, Output,ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
@Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>() 

  searchText: string = '';
  
  @ViewChild ('searchInput') searchInputEl:ElementRef

  updateSearchText(){
      this.searchText = this.searchInputEl.nativeElement.value;
      // console.log(InputEl.value);
    this.searchTextChanged.emit(this.searchText);

      
  }

  
  
}
