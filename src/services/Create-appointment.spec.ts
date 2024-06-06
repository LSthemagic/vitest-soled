import { Appointment } from "../models/Appointment";
import { CreateAppointment } from "./CreateAppointment";
import { describe, expect, it, test } from "vitest";

describe("create appointment", () => {
  it("should be able to create appointment", () => {
    const createAppointment = new CreateAppointment();
    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() + 1);
    expect(
      createAppointment.execute({
        costumer: "Jon Doe",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
    
  });
});
