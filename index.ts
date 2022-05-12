import { Observable, fromEvent } from 'rxjs';
import { map, filter, takeUntil } from 'rxjs/operators';
const currentTime$: Observable<Date> = new Observable((subscriber) => {
  setInterval(() => subscriber.next(new Date()), 1000);
});

const btn = document.getElementById('btn');
const stop$ = fromEvent(btn, 'click');

const getEvenTimestamps = (stop$: Observable<any>) => {
  return (source$: Observable<Date>) =>
    source$.pipe(
      map((date) => date.getTime()),
      filter((time) => time % 2 === 0),
      takeUntil(stop$)
    );
};

currentTime$.pipe(getEvenTimestamps(stop$)).subscribe({
  next: (time) => console.log(time),
  complete: () => console.log('DONE'),
});
