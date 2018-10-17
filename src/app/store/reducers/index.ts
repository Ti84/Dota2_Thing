import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

// exports meta reducer!
export * from "./meta.reducer";

// Router state stuff!
export interface RouterStateUrl {
    url: string,
    queryParams: Params,
    params: Params
}

export interface State {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
};

export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        
        // stealing properties from Angular router!
        let state: ActivatedRouteSnapshot = routerState.root;

        //While there are child routes (so, the last one is :id or whatever the parameter is!)
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;
        // anytime a new route is called, we get this new state for the current route! (Dope)
        return { url, queryParams, params};
    }
}