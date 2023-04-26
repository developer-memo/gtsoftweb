import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public toggleMenu: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  //Toggle menu
  public toggleSliseMenu = () =>{
    this.toggleMenu = !this.toggleMenu;  
    
  }
  
  /**
   * Navigate to pages inter
   */
  public navigateUrlPages = (url:string) =>{
    this.toggleMenu = !this.toggleMenu;  
    this.router.navigateByUrl(`${url}`);
  }
  

}
