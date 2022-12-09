import { DomainEvent } from './DomainEvent';
import EventBus from '../infrastructure/EventBus';
import Subscriber from '../../example/subscriber';

const InitSubscribers = () => {
  EventBus.getInstance().register('UserWasCreated', (event: DomainEvent) => {
    // console.log(event);
    // Subscriber.print(event);
  });
};

export default InitSubscribers;
