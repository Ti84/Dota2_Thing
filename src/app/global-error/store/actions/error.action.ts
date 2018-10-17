import { Action } from '@ngrx/store';

  // load error message
  export const LOAD_ERROR = '[GlobalError] Load Global Error';

  export class LoadError implements Action {
      readonly type = LOAD_ERROR;
      constructor(public payload: any){}
  }

  export type ErrorAction = LoadError;
