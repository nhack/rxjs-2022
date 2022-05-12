import { Observable, Subscriber } from 'rxjs';

import { IPizza } from './pizza/pizza.model';
import { PIZZAS } from './pizza/pizza.data';

// this method is called whit the first subscription
const generator = (subscriber: Subscriber<IPizza>) => {
  for (let pizza of PIZZAS) {
    subscriber.next(pizza);
  }
}

const pizzas$ = new Observable(generator);

// register the observer on the observable
pizzas$.subscribe({next: pizza => console.log(pizza.name)});