import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'x-access-token': 'coinranking11075ddff192511d02eb57e4b2a060da9b08fd6c590d899e'

  })
};

// x-access-token: 53a0b0a7e4f2fa59519e4

@Injectable({
  providedIn: 'root'
})
export class StockMarketService {

  constructor(private http: HttpClient) {
  }


  getCoinRanking() {
    return this.http
      .get<any>("https://www.alphavantage.co//query?function=TIME_SERIES_MONTHLY&symbol=VTI&apikey='api-key goes here'",httpOptions)
      .subscribe(response => console.log(response))
  }

}

