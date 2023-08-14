import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPaintingComponent } from './pages/page-my-painting/page-my-painting.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //si un user arrive sur localhost:4200 on le redirige vers localhost:4200/home
  { path: 'home', component: PageHomeComponent },
  { path: 'my-painting', component: PageMyPaintingComponent },
  { path: 'admin', component: PageAdminComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
