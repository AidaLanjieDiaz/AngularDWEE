import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  resultadoPeticion;
  constructor(private http: HttpClient) { }
  ngOnInit() { this.get(); }
  get() {
  this.http.get('https://jsonplaceholder.typicode.com/posts')
  .subscribe( data => { this.resultadoPeticion = data; } );
  }
  post(){
  this.http.post('https://jsonplaceholder.typicode.com/posts',
  {
  title: 'Previsión Viernes.',body: 'Parcialmente soleado.',
  userId: 1
  })
  .subscribe( data => { this.resultadoPeticion = data; } );
  }
  put(){
  this.http.put('https://jsonplaceholder.typicode.com/posts/1',
  {
  id: 1,
  title: 'Previsión Lunes',
  body: 'Lluvias.',
  userId: 1
  })
  .subscribe( data => { this.resultadoPeticion = data; } );
  }
  patch(){
  this.http.patch('https://jsonplaceholder.typicode.com/posts/1',
  {
  body: 'Soleado.'
  })
  .subscribe( data => { this.resultadoPeticion = data; } );
  }
  delete(){
  this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
  .subscribe( data => { this.resultadoPeticion = data; } );
  }
  }