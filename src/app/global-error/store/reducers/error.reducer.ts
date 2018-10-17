// Reducers: Pure functions that change the class immutably. NO MUTATIONS!

import * as fromError from "../actions/error.action";
import { Message } from "../../../components/models/message";

export interface ErrorState {
  entities: Message[]
};

export const initialState: ErrorState = {
  entities: []
};

export function reducer(
  state = initialState,
  action: fromError.ErrorAction
): ErrorState {
  const globalError = action.payload;

  switch (action.type) {
    case fromError.LOAD_ERROR: {
      return {
        ...state,
        entities: [...state.entities, globalError]
      };
    }
  }
  return state;
}

export const getGlobalError = (state: ErrorState) => state.entities;
