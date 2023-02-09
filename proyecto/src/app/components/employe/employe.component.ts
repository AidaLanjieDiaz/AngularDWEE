import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  private _employe: any = {}; 
  
  public get employe(): any {
    return this._employe;
  }
  public set employe(value: any) {
    this._employe = value;
  }

  constructor(
   private activatedRoute: ActivatedRoute,
   private employeesService: EmployeesService
  ) {
    this.activatedRoute.params.subscribe ((params): void => {
      this._employe = this.employeesService.getEmployee(params['id']);
    });
  }

  ngOnInit(): void {
  }

}