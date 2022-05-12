import { Observable, Subscriber, from } from 'rxjs';

import { IPizza } from './pizza/pizza.model';
import { PIZZAS } from './pizza/pizza.data';

const pizzas$ = from(PIZZAS);

// register the observer on the observable
pizzas$.subscribe({
  next: (pizza) => console.log(pizza.name),
  complete: () => console.log('subscrption is completed'),
});
