import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HouseComponent } from './components/house/house.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { registerGuard } from './guard/register.guard';

const routes: Routes = [

  {path: "", component: HomeComponent},
  { path: "about", component: AboutComponent },
  { path: "house", component: HouseComponent },
  { path: "admin", component: AdminComponent ,  canActivate : [AuthGuard] },
  { path: "service", component: AdminComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent  , canDeactivate : [registerGuard]},
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
