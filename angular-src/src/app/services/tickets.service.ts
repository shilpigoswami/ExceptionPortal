import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http:HttpClient) { }

  getTickets(p1, p2){
    const params = new HttpParams({
  fromObject: {
    tickettype: p1,
    violationtype: p2,
  }
});
      return this.http.get("http://localhost:3000/exceptionTickets/tickets", {params:params})
      .pipe(map(res => res));

      //      return this.http.get("http://localhost:3000/exceptionTickets/tickets", {params:params})
      //      .map((res: Response) => res.json())
  }

}
