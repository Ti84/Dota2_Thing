// Selectors allow us to select slices of the state.

// Grabbing from root.
import * as fromRoot from '../../../store';
// makes imports easier, so we don't have to destructure as much. (We need an interface and a getHeroesSummaryState ref)
import * as fromFeature from '../reducers';
import * as fromHeroes from '../reducers/hero.reducer';

import { createSelector } from "@ngrx/store";
import { HeroObject } from '../../models/heroes';

export const getHeroState = createSelector(fromFeature.getHeroesSummaryState, (state: fromFeature.HeroSummaryState) => state.heroes);

// export const getHeroes = createSelector(fromFeature.getHeroesSummaryState, fromHeroes.getHeroes);
export const getHeroEntities = createSelector(getHeroState, fromHeroes.getHeroEntities);

export const getSelectedHero = createSelector(
  getHeroEntities,
  fromRoot.getRouterState,
  (entities, router): HeroObject => {
    // grabbing heroId from the angular router (:heroId from /heroes/:heroId)
    console.log(entities);
    console.log(router);
    console.log(fromRoot.getRouterState);
    return router.state && entities[router.state.params.heroId];
  }
);
export const getHeroes = createSelector(getHeroEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[id]);
  });

export const getHeroesLoaded = createSelector(getHeroState, fromHeroes.getHeroesLoaded);

export const getHeroesLoading = createSelector(getHeroState, fromHeroes.getHeroesLoading);