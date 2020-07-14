import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  baseurl='https://findfalcone.herokuapp.com/'
  constructor(private http: HttpClient) { }

  public async fetchData(type) {
    if(type=='token'){
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept' : 'application/json',
        })
      };
      const token = await this.http
      .post(this.baseurl+type, null, httpOptions)
      .toPromise();
      return token;
    }
    else{
      const planets = await this.http
    .get(this.baseurl+type)
    .toPromise();
    return planets;
    }
  }

  public async findFalcone(requestBody) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      })
    };
    const responseBody  = await this.http
    .post(this.baseurl+requestBody.type, requestBody, httpOptions)
    .toPromise();
    return responseBody;
  }
}