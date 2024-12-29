import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface hasIdAndName {
  id:number;
  name:string;
}

@Component({
  imports: [],
  templateUrl: './les3.component.html',
  styleUrl: './les3.component.css'
})
export class Les3Component {
  constructor(private http: HttpClient) { }
  users:hasIdAndName[] =[];
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe({ next: (data: any) => this.users = data })
  }
}
