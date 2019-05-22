import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer iS2OJeabXcXlC1R-FDDPowyRp_2_nm1NFj_7XJ4B1kkFqp7fDf_QTNwQI1T12jST7iapIu1LWknGlPReYAHBxHu47JeBo16B6RWK7KY2nw9FfCK8A_uoB_F4cyHkXHYx"
  })
};

@Injectable({
  providedIn: 'root'
})

export class YelpserviceService {
  
    constructor(private http: HttpClient) { }
  
    getFoods(city, state, priceInfo) : Observable<any> {
      
      return this.http.get<any>(
        `http://localhost:3000/api/${city}/${state}/${priceInfo}`, httpOptions
      );
    }
}
