import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit,OnChanges {
  show: boolean =false;
  title = 'Gestion Conference';

  constructor() { }

  ngOnInit(): void {
    this.isLoggedIn();
  }
  ngOnChanges(changes: SimpleChanges) {
    for(const prop in changes){
      const c =changes[prop];
      const cc = JSON.stringify(c.currentValue);
      const pc = JSON.stringify(c.previousValue);
      if(cc !== pc)
        this.isLoggedIn();
    }


  }

  isLoggedIn(){
    if(localStorage.getItem("Utilisateur") === null){
      this.show=true;
    }
    else{
      this.show=false;
    }
  }
}
