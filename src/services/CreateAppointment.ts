import { Appointment } from "./../models/Appointment";

interface CreateAppointmentRequest {
  costumer: string;
  startsAt: Date;
  endsAt: Date;
}

type CreateAppointmentResponse = Appointment;

export class CreateAppointment {
  async execute({
    costumer,
    endsAt,
    startsAt,
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const appointment = new Appointment({
      costumer,
      endsAt,
      startsAt,
    });
    return appointment;
  }
}
