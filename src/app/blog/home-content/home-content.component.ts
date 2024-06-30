import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { PostsComponent } from '../../shared/components/posts/posts.component';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [
    RouterModule,
    PostsComponent
  ],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.css'
})
export class HomeContentComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

}
