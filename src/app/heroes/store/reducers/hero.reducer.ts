import * as fromHeroes from '../actions/hero.action';
import { Hero } from '../../models/heroes';

export interface HeroesState {
  data: Hero[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: HeroesState = {
  data: [],
  loaded: false,
  loading: false
}

export function reducer(
  state = initialState,
  action: fromHeroes.HeroesAction
): HeroesState {

  switch (action.type) {
    case fromHeroes.LOAD_HEROES: {
      return {
        ...state,
        loading: true
      };
    }

    case fromHeroes.LOAD_HEROES_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }  
    
    case fromHeroes.LOAD_HEROES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }  
  }
  return state;
}

export const getPizzasLoading = (state: HeroesState) => state.loading;
export const getPizzasLoaded = (state: HeroesState) => state.loaded;
export const getPizzas = (state: HeroesState) => state.data;
