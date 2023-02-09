import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NombresService {
  private _nombres: any[] = [];

  public get nombres(): any[] {
    return this._nombres;
  }
  public set nombres(value: any[]) {
    this._nombres = value;
  }
  constructor() {}
}

