import { Observable, Subscription } from 'rxjs';

const currentTime$ = new Observable((subscriber) => {
  setInterval(() => subscriber.next(new Date()), 1000);
});

const subs: Subscription = currentTime$.subscribe((date) => console.log(date));

setTimeout(() => subs.unsubscribe(), 10000);
