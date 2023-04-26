import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit, OnDestroy {

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
    this.getAllProjects()
  }


  //Get all projects
  public getAllProjects = () =>{
    const allProjects = localStorage.getItem('projects') || null;
    if(allProjects == null){
      this.projectsSrv.obtenerUsuariosService().pipe(takeUntil(this._unsubscribeAll)).subscribe( (resp:any) =>{
        this.projects = resp.projects;
        localStorage.setItem('projects', JSON.stringify(this.projects));
      })
    } else {
      this.projects = JSON.parse(allProjects)
    }
  }


  public navigateDetail = (id:string) =>{
    this.router.navigate(['/detalle-proyecto', id])
  }

}
