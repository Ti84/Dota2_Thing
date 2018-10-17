import * as fromFeature from '../reducers';
import * as fromToast from '../reducers/toast.reducer';

import { createSelector } from "@ngrx/store";

export const getToastState = createSelector(fromFeature.getToastSummaryState,
  (state: fromFeature.ToastSummaryState) => state.messages);

export const getMessageEntities = createSelector(getToastState, fromToast.getMessages);

export const getMessages = createSelector(getMessageEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[id]);
  });