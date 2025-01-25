import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule) },
    { path: 'about', loadChildren: () => import('../app/modules/about/about.module').then(m => m.AboutModule) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
