export interface AppointmentProps {
  costumer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppointmentProps;
  constructor(props: AppointmentProps) {
    this.props = props;
  }

  public get costumer() {
    return this.props.costumer;
  }

  public get startsAt() {
    return this.props.startsAt;
  }

  public get endsAt() {
    return this.props.endsAt;
  }
}
