import { Routes } from '@angular/router';
import { HeroesComponent } from './hero-summary-page/heroes.component';
export const heroRoutes: Routes = [
    {
        path: 'home',
        component: HeroesComponent
    },
    {
      path: 'heroes',
      component: HeroesComponent
    }
];
