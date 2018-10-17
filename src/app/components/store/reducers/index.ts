import * as fromToast from './toast.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface ToastSummaryState {
  messages: fromToast.ToastState;
}

// Action Reducer Map - Type check for
export const reducers: ActionReducerMap<ToastSummaryState> = {
  // slice of our state
  messages: fromToast.reducer
};

export const getToastSummaryState = createFeatureSelector<ToastSummaryState>(
  'messages'
);
