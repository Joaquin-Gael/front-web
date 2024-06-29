import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { HomeContentComponent } from '../home-content/home-content.component';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule, 
    RouterOutlet, 
    HomeContentComponent, 
    NavBarComponent,
    SideBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    
  }
}
