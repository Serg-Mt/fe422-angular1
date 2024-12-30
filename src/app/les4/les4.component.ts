import { Component } from '@angular/core';
import { JsonplaceholderService, Post, hasIdAndName } from '../jsonplaceholder.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

const PI = Math.PI;


@Component({
  selector: 'app-les4',
  imports: [AsyncPipe],
  templateUrl: './les4.component.html',
  styleUrl: './les4.component.css'
})
export class Les4Component {
  PI=PI;
  users!: Observable<hasIdAndName[]>;
  posts: Post[] = [];
  constructor(private jsph: JsonplaceholderService) { }
  getPosts(id: number) {
    this.jsph.getPostsByUserId(id).subscribe(
      data => this.posts = data
    )
  }
  ngOnInit() {
    this.users = this.jsph.getAllUsers();
  }
}
