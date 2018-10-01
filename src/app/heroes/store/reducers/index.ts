import * as fromHeroes from './hero.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface HeroSummaryState {
  heroes: fromHeroes.HeroesState
}

// Action Reducer Map - Type check for HeroSummaryState
export const reducers: ActionReducerMap<HeroSummaryState> = {
  // slice of our state
  heroes: fromHeroes.reducer
};