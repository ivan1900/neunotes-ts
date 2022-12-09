import { DomainEvent } from '../shared/domain/DomainEvent';

class Subscriber {
  static print(event: DomainEvent) {
    // console.log(event);
  }
}

export default Subscriber;
