import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEnComponent } from './home-en/home-en.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  {path:'en', component:HomeEnComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }