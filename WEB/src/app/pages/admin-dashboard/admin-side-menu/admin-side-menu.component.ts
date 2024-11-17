import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-side-menu',
  templateUrl: './admin-side-menu.component.html',
  styleUrls: ['./admin-side-menu.component.css']
})


export class AdminSideMenuComponent implements OnInit {

  @Input() hideSingleSelectionIndicator: boolean = true;
  @Output() showAdminMenuOptions = new EventEmitter<string>();
  
  ngOnInit(): void {}

  adminMenuOptions = ['Produkter', 'Orderhistorik', 'Kunder', 'Statistik',
                  'Recensioner', 'Transaktioner', 'Säljare', 
                  'Rea produkter', 'Utseende', 'Inställningar'];



  emitAdminOptions(adminOptions: string): void {
              this.showAdminMenuOptions.emit(adminOptions);      
            }

  

}
