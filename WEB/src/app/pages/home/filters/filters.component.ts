import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() hideSingleSelectionIndicator: boolean = true;
  @Output() showCategory = new EventEmitter<string>();




  categories = ['Barnböcker', 'Deckare', 'Skönlitteratur', 'Data & IT',
  'Biografier', 'Djur & Natur', 'Läromedel', 'Medicin' ];
  


  
  ngOnInit(): void {}

  emitCategory(category: string): void {
    this.showCategory.emit(category);
  }



}

