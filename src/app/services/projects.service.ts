import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const BASE_URL: String = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public httpOptions:any = {}; 

  constructor(
    private http: HttpClient,
  ) { 
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json' }) };
  }

  /**
   * Método GET para obtener todos los usuarios
   */
  public obtenerUsuariosService = () =>{
    return this.http.get(`${BASE_URL}/allProyectos`, this.httpOptions).pipe( map( resp => resp))
  }

}
