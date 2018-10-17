// Effect: a side effect from an action occuring (ex. if LOAD_HEROES is triggered, this effect happens)

import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import * as errorActions from "../actions/error.action";
import * as fromStore from "../../../components/store"
import { mapTo } from "rxjs/operators";

@Injectable()
export class HeroesEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  loadError$ = this.actions$.pipe(
    ofType(errorActions.LOAD_ERROR),
    mapTo(
      new fromStore.DisplayMessage({
        content: "BLAH",
        style: "danger"
      })
    )
  );
}
