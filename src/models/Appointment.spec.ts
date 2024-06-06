import { expect, test } from "vitest";
import { Appointment } from "./Appointment";

test("Create an appointment", () => {
  const appointment = new Appointment({
    costumer: "Jon Doe",
    startsAt: new Date(),
    endsAt: new Date(),
  });

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.costumer).toEqual('Jon Doe')

});
