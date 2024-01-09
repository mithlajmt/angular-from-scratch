import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
@Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>() 

  searchText: string = '';

  updateSearchText(event: any){
      this.searchText = event.target.value;
  }
  onSearchTextChanged() {
    // Emit the actual searchText value:
    this.searchTextChanged.emit(this.searchText);
    
  }
  
  
}
