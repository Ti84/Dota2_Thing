import * as fromError from './error.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface ErrorReducerState {
  messages: fromError.ErrorState;
}

// Action Reducer Map - Type check for
export const reducers: ActionReducerMap<ErrorReducerState> = {
  messages: fromError.reducer
};

export const getToastSummaryState = createFeatureSelector<ErrorReducerState>(
  'errors'
);
