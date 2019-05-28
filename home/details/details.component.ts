import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public movieData:any;

  constructor(
    private _route: ActivatedRoute,
     private router: Router,
     private movieService:MovieService
  ) { }

  ngOnInit() {
    let movieId = this._route.snapshot.paramMap.get('id');

    this.movieService.getSingleMovieInformation(movieId).subscribe(
      data => {
        this.movieData=data;
       console.log(data);
      }, error => {
        console.log(error.errorMessage);
      }
    )

  }

}
