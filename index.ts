import { interval, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

const source$ = interval(1000).pipe(take(4));
const subject$ = new Subject();

source$.subscribe(subject$);

subject$.subscribe((value) => console.log(`Observer 1: ${value}`));
setTimeout(
  () => subject$.subscribe((value) => console.log(`Observer 2: ${value}`)),
  1000
);
setTimeout(
  () => subject$.subscribe((value) => console.log(`Observer 3: ${value}`)),
  2000
);
setTimeout(
  () =>
    subject$.subscribe({
      next: (value) => console.log(`Observer 4: ${value}`),
      complete: () => console.log('Observer 4 complete.'),
    }),
  4500
);
