import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

const currentTime$: Observable<Date> = new Observable((subscriber) => {
  setInterval(() => subscriber.next(new Date()), 1000);
});

const toTime = (date: Date) => date.getTime();
const toTimeMap: OperatorFunction<Date, number> = map(toTime);

toTimeMap(currentTime$).subscribe((time) => console.log('Manual:' + time));
currentTime$.pipe(toTimeMap).subscribe((time) => console.log('Pipe:' + time));
