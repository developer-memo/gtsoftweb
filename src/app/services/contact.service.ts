import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const BASE_URL: String = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public httpOptions:any = {}; 

  constructor(
    private http: HttpClient,
  ) { 
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json' }) };
  }


  //Send emails
  public sendEmailService = (data:object) =>{
    return this.http.post(`${BASE_URL}/email`, data, this.httpOptions).pipe( map( resp => resp))
  }




  
}
