import { Action } from "@ngrx/store";
import { Hero } from "../../models/heroes";

  
  // load pizzas
  export const LOAD_HEROES = '[Heroes] Load Heroes';
  export const LOAD_HEROES_FAIL = '[Heroes] Load Heroes Failed';
  export const LOAD_HEROES_SUCCESS = '[Heroes] Load Heroes Success';

  export class LoadHeroes implements Action {
      readonly type = LOAD_HEROES;
  }

  export class LoadHeroesFail implements Action {
      readonly type = LOAD_HEROES_FAIL;
      constructor(public payload: any) {}
  }

  export class LoadHeroesSuccess implements Action {
      readonly type = LOAD_HEROES_SUCCESS;
      constructor(public payload: Hero[]) {}
  }

  //action types
  export type HeroesAction = LoadHeroes | LoadHeroesFail | LoadHeroesSuccess;