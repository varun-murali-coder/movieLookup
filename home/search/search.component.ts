import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { Router } from '@angular/router';
import { CellCustomComponent } from '../cell-custom/cell-custom.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
private keyword;
private gridApi;
private gridColumnApi;
public columnDefs;
private allMoviesResGrid
  constructor(public movieService:MovieService,
    public router: Router
) { }

  ngOnInit() {

    this.keyword = this.movieService.getSearchFromLocalMovies();
    console.log("The value in search page is:"+this.keyword);
    /*Logic for table*/
    this.columnDefs = [{
      headerName: "Title",
      field: "Title",
      width: 400,
      sortingOrder: ["asc", "desc"],
      filter: "agTextColumnFilter",
      cellRendererFramework: CellCustomComponent


    },
    {
      headerName: "Year",
      field: "Year",
      width: 400,
      sortingOrder: ["asc", "desc"],
      filter: "agDateColumnFilter"
    }
    ]
    



  }

  /*Keyword search functionality*/
  onreadyGrid(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.movieService.nameSearch(this.keyword).subscribe(
      data=>{
        this.allMoviesResGrid=data["Search"];
        this.movieService.setSearchInfoInLocalStorage( this.allMoviesResGrid);
        params.api.setRowData(this.allMoviesResGrid);

      },error=>{
        console.log("Some error occured");

      }
    )

  }

}
