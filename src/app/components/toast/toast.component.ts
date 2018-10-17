import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { ToastState } from '../store/reducers/toast.reducer';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  messages$: Observable<Message[]>;
  constructor(private store: Store<ToastState>) { }

  ngOnInit() {
      this.messages$ = this.store.select(fromStore.getMessages);
  }
}
