export interface AppointmentProps {
  costumer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppointmentProps;
  constructor(props: AppointmentProps) {
    const { endsAt, startsAt } = props;
    if (endsAt <= startsAt) {
      throw new Error("Appointment invalid: ends at small what starts at");
      
    }
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
