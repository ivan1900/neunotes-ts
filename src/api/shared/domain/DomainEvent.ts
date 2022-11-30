export class DomainEvent {
  readonly occurredOn: Date;
  readonly attributes?: any;

  constructor(occurredOn: Date, attributes: any) {
    this.occurredOn = occurredOn;
    this.attributes = attributes;
  }
}
