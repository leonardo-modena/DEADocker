import { Component, OnInit, Renderer2, ElementRef  } from '@angular/core';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myHam;
  mySideBar;
  mySideBarMenu;
  myOverlay;
  hamburger: boolean;
  faMapMarkedAlt = faMapMarkedAlt

  constructor(private rend: Renderer2, private elemRef: ElementRef) {
    
   }

  ngOnInit(): void {
    this.myHam = this.elemRef.nativeElement.querySelector(".hamburger");
    this.mySideBar = this.elemRef.nativeElement.querySelector(".sidebar");
    this.mySideBarMenu = this.elemRef.nativeElement.querySelector(".sidebarMenu");
    this.myOverlay = this.elemRef.nativeElement.querySelector(".overlay");
    this.hamburger = true;
  }

  
  hamburgerCLick(){
    const action = this.hamburger ? 'addClass' : 'removeClass';
    this.rend[action](this.myHam, 'is-active');
    this.rend[action](this.mySideBar, 'appear-left');
    this.rend[action](this.mySideBarMenu, 'animated-left')
    this.rend[action](this.myOverlay, 'open-overlay')

    this.hamburger = !this.hamburger;
  }

}
