import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "home", component: HomeComponent},
    { path: "login", component: LoginComponent},
    { path: "aboutme", component: AboutmeComponent},
    { path: "**", component: PageNotFoundComponent}
];
