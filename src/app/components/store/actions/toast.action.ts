// Actions: Actions that can be dispatched from a component.

import { Action } from '@ngrx/store';
import { Message } from '../../models/message';

  // load Heroes
  export const DISPLAY_MESSAGE = '[Toast] Load Message';
  export const DISMISS_MESSAGE = '[Toast] Dismiss Message';

  export class DisplayMessage implements Action {
      readonly type = DISPLAY_MESSAGE;
      constructor(public payload: Message) {}
  }

  export class DismissMessage implements Action {
      readonly type = DISMISS_MESSAGE;
      constructor(public payload: number) {}
  }

  // Action Types
  export type ToastAction = DisplayMessage | DismissMessage;
