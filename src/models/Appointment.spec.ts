import { expect, test } from "vitest";
import { Appointment } from "./Appointment";

test("Create an appointment", () => {
  const startsAt = new Date();
  const endsAt = new Date();
  startsAt.setDate(startsAt.getDate() + 1);
  endsAt.setDate(endsAt.getDate() + 2);
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

  startsAt.setDate(startsAt.getDate() + 3);
  endsAt.setDate(endsAt.getDate() + 1);

  expect(() => {
    return new Appointment({
      costumer: "Jon Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});

test("cannot create appointment with start date before now", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() - 1);
  endsAt.setDate(endsAt.getDate() + 3);

  expect(() => {
    return new Appointment({
      costumer: "Jon Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
