import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  constructor(private http: HttpClient) { }

  public async fetchPlanets() {
    const planets = await this.http.get('https://findfalcone.herokuapp.com/planets').toPromise();
    return planets;
  }

  public async fetchVehicles() {
    const vehicles = await this.http.get('https://findfalcone.herokuapp.com/vehicles').toPromise();
    return vehicles;
  }

  public async fetchToken() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
      })
    };
    const token = await this.http.post('https://findfalcone.herokuapp.com/token', null, httpOptions).toPromise();
    return token;
  }

  public async findFalcone(requestBody) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      })
    };
    const responseBody  = await this.http.post('https://findfalcone.herokuapp.com/find', requestBody, httpOptions).toPromise();
    return responseBody;
  }
}