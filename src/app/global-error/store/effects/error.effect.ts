// Effect: a side effect from an action occuring (ex. if LOAD_HEROES is triggered, this effect happens)

import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import * as errorActions from "../actions/error.action";
import { map, tap } from "rxjs/operators";
import * as fromStore from "../../../components/store"

@Injectable()
export class ErrorEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  loadError$ = this.actions$.pipe(
    ofType(errorActions.LOAD_ERROR),
    map((action: errorActions.LoadError) => {
      return new fromStore.DisplayMessage({
        content: action.payload,
        style: "danger"
      })
    })
  );
}
