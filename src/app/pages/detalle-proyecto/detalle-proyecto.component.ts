import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Projects } from 'src/app/interfaces/project.interface';
import { ProjectsType, TypeProjectsMap } from 'src/app/models/proyectos.model';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.scss']
})
export class DetalleProyectoComponent implements OnInit {

  public project!:Projects;
  public projectsType:any = ProjectsType;
  public skills!:any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( param =>{
      const idProject = param.get('id');
      this.getProjectById(idProject!);
    });
    
  }


  getProjectById =(idProject:string) =>{
    const projects = JSON.parse(localStorage.getItem('projects')!);
    this.project = projects.filter( (pro:Projects) => pro.id === idProject)[0];
    this.skills = JSON.parse(this.project.skills);
  }


  goBack = () =>{
    this._location.back();
  }

}
