import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  host = environment.host;

  constructor(private http: HttpClient) { }

  getAllArticles = () => {
    return new Promise((resolve, reject) => {
      this.http.get(this.host + 'shows/1/episodes')
        .subscribe((response) => {
          resolve(response);
        },
          (error) => {
            reject(error);
          })
    });
  }

  

  getAllByParameter(q: string) {
    console.log(q)
    return new Promise((resolve, reject) => {
      this.http.get(this.host + 'search/shows?q='+ q)
        .subscribe((response) => {
          console.log(response)
          resolve(response);
        },
          (error) => {
            reject(error);
          })
    });

  }
}
