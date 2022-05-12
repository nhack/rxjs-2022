import { ConnectableObservable, interval, Subject } from 'rxjs';
import {
  multicast,
  publish,
  publishBehavior,
  publishLast,
  publishReplay,
  refCount,
  share,
  take,
} from 'rxjs/operators';

const source$ = interval(1000).pipe(
  take(4)
  //multicast(new Subject()),
  //publish(),
  //publishLast(),
  //publishBehavior(66),
  //publishReplay(),
  //refCount()
  //share()
) as ConnectableObservable<number>;

source$.subscribe((value) => console.log(`Observer 1: ${value}`));
setTimeout(
  () => source$.subscribe((value) => console.log(`Observer 2: ${value}`)),
  1500
);
setTimeout(
  () => source$.subscribe((value) => console.log(`Observer 3: ${value}`)),
  2500
);
setTimeout(
  () =>
    source$.subscribe({
      next: (value) => console.log(`Observer 4: ${value}`),
      complete: () => console.log('Observer 4 complete.'),
    }),
  4500
);

//source$.connect();
