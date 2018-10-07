import * as fromHeroes from './hero.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface HeroSummaryState {
  heroes: fromHeroes.HeroesState;
}

// Action Reducer Map - Type check for HeroSummaryState
export const reducers: ActionReducerMap<HeroSummaryState> = {
  // slice of our state
  heroes: fromHeroes.reducer
};

export const getHeroesSummaryState = createFeatureSelector<HeroSummaryState>(
  'heroes'
);
