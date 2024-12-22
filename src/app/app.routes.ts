import { Routes } from '@angular/router';
import { HomeComponent, ParentComponent } from './small.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'les1', component: MainComponent },
  { path: 'les2', component: ParentComponent }
];
