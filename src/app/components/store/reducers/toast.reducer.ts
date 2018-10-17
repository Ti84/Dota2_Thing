// Reducers: Pure functions that change the class immutably. NO MUTATIONS!

import * as fromToast from '../actions/toast.action';
import { Message } from '../../models/message';

export interface ToastState {
  messageList: Message[]
}

export const initialState: ToastState = {
  messageList: []
}
export function reducer(
  state = initialState,
  action: fromToast.ToastAction
): ToastState {
  switch (action.type) {
    case fromToast.DISPLAY_MESSAGE: {
      console.log(action.payload);
      const message = action.payload;
      return {
        ...state,
        messageList: [...state.messageList, message]
      };
    }
    case fromToast.DISMISS_MESSAGE: {
      console.log(action.payload);
      return {
        ...state
      }
    }
  }
  return state;
}

export const getMessages = (state: ToastState) => state.messageList;
