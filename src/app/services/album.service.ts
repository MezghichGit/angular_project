import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http:HttpClient) { }

  getData()
  {
    //return "Welcome to Services";
    return this.http.get("https://jsonplaceholder.typicode.com/albums");
  }
}
