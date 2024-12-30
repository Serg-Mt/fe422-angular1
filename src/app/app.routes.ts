import { Routes } from '@angular/router';
import { HomeComponent, ParentComponent } from './small.component';
import { MainComponent } from './main/main.component';
import { Les3Component } from './les3/les3.component';
import { Les4Component } from './les4/les4.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'les1', component: MainComponent },
  { path: 'les2', component: ParentComponent },
  { path: 'les3', component: Les3Component },
  { path: 'les4', component: Les4Component }
];
