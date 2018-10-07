import { Routes } from '@angular/router';
import { HeroesComponent } from './hero-summary-page/heroes.component';
import { HeroDetailPageComponent } from './hero-detail-page/hero-detail-page.component';
export const heroRoutes: Routes = [
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
      path: 'heroes/:heroId',
      component: HeroDetailPageComponent
    }
];
