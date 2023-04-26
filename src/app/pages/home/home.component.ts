import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProjectsService } from '../../services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  projects:any[] = [];

  constructor(
    private projectsSrv: ProjectsService,
    private router:Router
  ) { }
  
  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


  ngOnInit(): void {
    this.getAllProjects();
  }

  //Get all projects
  public getAllProjects = () =>{
    this.projectsSrv.obtenerUsuariosService().pipe(takeUntil(this._unsubscribeAll)).subscribe( (resp:any) =>{
      this.projects = resp.projects;
      localStorage.setItem('projects', JSON.stringify(this.projects));
    })
  }


  public navigateDetail = (id:string) =>{
    this.router.navigate(['/detalle-proyecto', id])
  }

}
