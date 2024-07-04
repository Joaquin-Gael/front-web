import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { HomeContentComponent } from '../home-content/home-content.component';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';
import { AuthService } from '../../core/services/auth.service';

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
  username:string = ''
  email:string = ''

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.authService.getUserID().subscribe(
      res => {
        this.username = res.username
        this.email = res.email
      },
      error => console.error(error)
    )
  }
}
