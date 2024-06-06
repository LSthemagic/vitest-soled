import { expect, test } from "vitest";
import { Appointment } from "./Appointment";

test("Create an appointment", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() + 1);
  const appointment = new Appointment({
    costumer: "Jon Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.costumer).toEqual("Jon Doe");
});

test("cannot create appointment with end Date before of start date", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() - 1);

  expect(() => {
    return new Appointment({
      costumer: "Jon Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
