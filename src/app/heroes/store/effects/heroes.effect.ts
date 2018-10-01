import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import * as heroActions from '../actions/hero.action';
import { switchMap, map } from 'rxjs/operators';
import { HeroesService } from "../../heroes.service";

@Injectable()
export class HeroesEffects {
    constructor(private actions$: Actions, private heroesService: HeroesService) {}

    @Effect()
    loadHeroes$ = this.actions$.ofType(heroActions.LOAD_HEROES).pipe(
        switchMap(() => {
            return this.heroesService.getHeroInfo().pipe(
                map(heroes => new heroActions.LoadHeroesSuccess(heroes));
            );
        }));
}