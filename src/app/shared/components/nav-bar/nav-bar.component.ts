import { Component, Input } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  @Input() username: string = ''
  @Input() email:string = ''

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    initFlowbite()
  }

  logOut(): void{
    this.authService.logOut()
    this.router.navigateByUrl('/auth')
  }

}
