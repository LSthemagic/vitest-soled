import { Appointment } from "./../models/Appointment";
export interface IAppointmentRepository {
  create(appointment: Appointment): Promise<void>;
  findOverlappingAppointment(
    startsAt: Date,
    endsAt: Date
  ): Promise<Appointment | null>;
}
