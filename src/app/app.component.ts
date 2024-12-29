import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prj1-tl';
  nav = [
    { href: '/', title: 'Home1' },
    { href: '/les1', title: 'les 1 template lang' },
    { href: '/les2', title: 'les 2 components' },
    { href: '/les3', title: 'les 3 http client' }
  ];
}
