import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public apikey="9a25a0b1";
  public apiEndpoint="http://www.omdbapi.com"

  constructor(private http: HttpClient) { }

   /*For Search keyword Local Storage*/
   public getSearchFromLocalMovies = () => {

    return JSON.parse(localStorage.getItem('search'));

  } // end getUserInfoFromLocalstorage


  public setSerachInLocalMovies = (data) =>{

    localStorage.setItem('search', JSON.stringify(data))


  }

   /*Method to get the movie details based on movie name*/
   public nameSearch(titleName):Observable <any> {

    let myResponse = this.http.get(this.apiEndpoint + '/?s='+titleName+'&apikey=' + this.apikey);
    return myResponse;
  }


/*For search results Local Storage*/
public getSearchInfoFromLocalstorage = () => {

  return JSON.parse(localStorage.getItem('searchInfo'));

} // end getUserInfoFromLocalstorage


public setSearchInfoInLocalStorage = (data) =>{

  localStorage.setItem('searchInfo', JSON.stringify(data))


}


/*Method to get details page-Rest API call*/
public getSingleMovieInformation(currentMovieId): any {
  let myResponse = this.http.get(this.apiEndpoint + '/?i=' + currentMovieId + '&apikey=' + this.apikey);
  return myResponse;
}

}
