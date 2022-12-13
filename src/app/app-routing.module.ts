import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PreferencesComponent} from "./pages/preferences/preferences.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {GameComponent} from "./pages/game/game.component";
import {RecordsComponent} from "./pages/records/records.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";

const routes: Routes = [
  {
    path: 'preferences',
    component: PreferencesComponent
  },
  {
    path: 'home',
    component: MainPageComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'records',
    component: RecordsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
