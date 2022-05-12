import { Observable } from 'rxjs';

const currentTime$ = new Observable((subscriber) => {
  const dateStr = new Date();
  subscriber.next(dateStr);
  subscriber.complete();
});

currentTime$.subscribe((date) => console.log(date));
setTimeout(() => currentTime$.subscribe((date) => console.log(date)), 1000);
setTimeout(() => currentTime$.subscribe((date) => console.log(date)), 2000);
