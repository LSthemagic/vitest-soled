import { Appointment } from "./../models/Appointment";
import { IAppointmentRepository } from "../repositories/appointment-repository";
interface CreateAppointmentRequest {
  costumer: string;
  startsAt: Date;
  endsAt: Date;
}

type CreateAppointmentResponse = Appointment;

export class CreateAppointment {
  constructor(private appointmentRepository: IAppointmentRepository) {}

  async execute({
    costumer,
    endsAt,
    startsAt,
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const overlappingRepository =
      await this.appointmentRepository.findOverlappingAppointment(
        startsAt,
        endsAt
      );

    if (overlappingRepository) {
      throw new Error("Another appointment overlaps this appointment dates");
    }

    const appointment = new Appointment({
      costumer,
      endsAt,
      startsAt,
    });

    await this.appointmentRepository.create(appointment);

    return appointment;
  }
}
