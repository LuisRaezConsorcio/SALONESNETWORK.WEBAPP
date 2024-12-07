import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'Home',
        pathMatch:'full'
    },
    {
        path: 'Login',
        loadComponent: () =>
            import('./Pages/Auth/login/login.component').then((m) => m.LoginComponent)
    },
    {
        path: 'Home',
        data: { breadcrumb: 'Home' },

        loadChildren: () =>
            import('./Pages/Home/home.router').then((m) => m.default)
    }

];
