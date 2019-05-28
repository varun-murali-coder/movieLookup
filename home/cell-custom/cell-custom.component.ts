import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-cell-custom',
  templateUrl: './cell-custom.component.html',
  styleUrls: ['./cell-custom.component.css']
})
export class CellCustomComponent implements OnInit {
  private cellValue:any;
  public movies:object[]=[];

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    //To fetch the details of the search filter
    this.movies=this.movieService.getSearchInfoFromLocalstorage();
  }
  //To manipulate columns of a grid.
  agInit(params){
    this.cellValue=params.value;
  }

}
