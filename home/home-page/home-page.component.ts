import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public keyword;

  constructor(
    public router: Router,
    public movieService:MovieService

    ) { }

  ngOnInit() {
  }

  /*Search Functionality*/
search(){
  this.movieService.setSerachInLocalMovies(this.keyword);
  
        this.router.navigate(['/search']);
  
  }

}
