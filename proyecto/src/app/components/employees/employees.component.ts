import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service'; 
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components.module';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  private _employees: any[] = [];

  public get employees(): any[] {
    return this._employees;
  }
  public set employees(value: any[]) {
    this._employees = value;
  }

  constructor(private employeesService: EmployeesService,
    private router: Router) { 
    this._employees = employeesService.employees;
  }

  /* showEmployes (id: number) {

  } */

  ngOnInit(): void {
  }

}