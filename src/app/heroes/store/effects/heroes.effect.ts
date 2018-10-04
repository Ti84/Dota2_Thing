import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as heroActions from '../actions/hero.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HeroesService } from '../../heroes.service';
import { of } from 'rxjs';

@Injectable()
export class HeroesEffects {
    constructor(private actions$: Actions, private heroesService: HeroesService) {}

    @Effect()
    loadHeroes$ = this.actions$.pipe(
        ofType(heroActions.LOAD_HEROES),
        switchMap(() => {
            return this.heroesService.getHeroInfo().pipe(
                map(heroes => {
                   return new heroActions.LoadHeroesSuccess(heroes);
                }),
                catchError(error => of(new heroActions.LoadHeroesFail(error))
            ));
        }));
}
