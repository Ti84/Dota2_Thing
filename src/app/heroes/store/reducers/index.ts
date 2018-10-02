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

export const getHeroState = createSelector(getHeroesSummaryState, (state: HeroSummaryState) => state.heroes);

export const getHeroes = createSelector(getHeroState, fromHeroes.getHeroes);
export const getHeroesLoaded = createSelector(getHeroState, fromHeroes.getHeroesLoaded);
export const getHeroesLoading = createSelector(getHeroState, fromHeroes.getHeroesLoading);
