import { InMemoryAppointmentsRepository } from "./../repositories/in-memory/in-memory-appointments-repository";
import { Appointment } from "../models/Appointment";
import { getFutureDate } from "../tests/utils/GetFutureDate";
import { CreateAppointment } from "./CreateAppointment";
import { describe, expect, it } from "vitest";

describe("create appointment", () => {
  it("should be able to create appointment", () => {
    const appointmentRepository = new InMemoryAppointmentsRepository();
    const createAppointment = new CreateAppointment(appointmentRepository);
    const startsAt = getFutureDate("2023-12-12");
    const endsAt = getFutureDate("2023-12-15");

    expect(
      createAppointment.execute({
        costumer: "Jon Doe",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });

  it("should not be able to create appointment with overlapping dates", async () => {
    const appointmentRepository = new InMemoryAppointmentsRepository();
    const createAppointment = new CreateAppointment(appointmentRepository);
    const startsAt = getFutureDate("2023-12-12");
    const endsAt = getFutureDate("2023-12-15");

    await createAppointment.execute({
      costumer: "Jon Doe",
      startsAt,
      endsAt,
    });

    expect(
      createAppointment.execute({
        costumer: "Jon Doe",
        startsAt: getFutureDate("2023-12-11"),
        endsAt: getFutureDate("2023-12-14"),
      })
    ).rejects.toBeInstanceOf(Error);

    expect(
      createAppointment.execute({
        costumer: "Jon Doe",
        startsAt: getFutureDate("2023-12-13"),
        endsAt: getFutureDate("2023-12-14"),
      })
    ).rejects.toBeInstanceOf(Error);

    expect(
      createAppointment.execute({
        costumer: "Jon Doe",
        startsAt: getFutureDate("2023-12-13"),
        endsAt: getFutureDate("2023-12-16"),
      })
    ).rejects.toBeInstanceOf(Error);

    expect(
      createAppointment.execute({
        costumer: "Jon Doe",
        startsAt: getFutureDate("2023-12-13"),
        endsAt: getFutureDate("2023-12-14"),
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
