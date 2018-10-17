// Reducers: Pure functions that change the class immutably. NO MUTATIONS!

import * as fromError from "../actions/error.action";

export interface ErrorState {
  entity: {}
}

export function reducer(
  state: any = null,
  action: fromError.ErrorAction
): ErrorState {
  const globalError = action.payload;

  switch (action.type) {
    case fromError.LOAD_ERROR: {
    console.log('It werked');
      return {
        ...state,
        entity: globalError
      };
    }
  }
  return state;
}

export const getGlobalError = (state: ErrorState) => state.entity;
