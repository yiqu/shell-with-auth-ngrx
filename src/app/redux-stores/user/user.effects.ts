import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserInfoEffects {

  constructor(public actions$: Actions) {
  }

}
