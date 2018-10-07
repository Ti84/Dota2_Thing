import {
    ActionReducerMap,
    MetaReducer,
  } from '@ngrx/store';
  import { environment } from '../../../environments/environment';

  // export interface State {}

  export const reducers: ActionReducerMap<{}> = {
  };

  export const metaReducers: MetaReducer<{}>[] = !environment.production
    ? []
    : [];
