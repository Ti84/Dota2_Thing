import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
export const routes: Routes = [
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
        path: 'home',
        component: HeroesComponent
    },
    { 
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
];

// { path: '**', component: PageNotFoundComponent }