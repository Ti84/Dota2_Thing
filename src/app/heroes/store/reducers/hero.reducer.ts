import * as fromHeroes from '../actions/hero.action';
import { HeroObject } from '../../models/heroes';

export interface HeroesState {
  // data: Hero[]; changing to entity (dunno, Todd Motto was like do it, so I was like k.) Good for scaling data!
  entities: {[id: number]: HeroObject},
  loaded: boolean;
  loading: boolean;
}

export const initialState: HeroesState = {
  // data: HeroObject[],
  entities: {},
  loaded: false,
  loading: false
};

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
      // const data = action.payload;
      const heroes = action.payload;

      const entities = heroes.reduce(
        (entities: { [id: number]: HeroObject }, hero: any) => {
          return {
            ...entities,
            [hero.id]: {
                id: hero.id,
                img: hero.img,
                localizedName: hero.localized_name,
                roles: hero.roles,
                primaryAttribute: hero.primary_attr
            }
          }
        }, 
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        // data,
        entities
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

export const getHeroesLoading = (state: HeroesState) => state.loading;
export const getHeroesLoaded = (state: HeroesState) => state.loaded;
export const getHeroEntities = (state: HeroesState) => state.entities;
// export const getHeroes = (state: HeroesState) => state.data;
