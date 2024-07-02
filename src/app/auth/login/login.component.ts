import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  username:string = ''
  password:string = ''

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    
  }

  submitForm(): void{
    this.authService.logIn({username:this.username,password:this.password}).subscribe(
      res => {
        localStorage.setItem('session',res.access)
        localStorage.setItem('refresh',res.refresh)
        this.authService.setVisit()
        this.router.navigateByUrl('/home')
      },
      error => {
        console.error(error)
      }
    )
  }

}
