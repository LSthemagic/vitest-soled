import { expect, test } from "vitest";
import { Appointment } from "./Appointment";
import { getFutureDate } from "../tests/utils/GetFutureDate";

test("Create an appointment", () => {
  const startsAt = getFutureDate('2023-01-10');
  const endsAt = getFutureDate('2023-01-12');

  const appointment = new Appointment({
    costumer: "Jon Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.costumer).toEqual("Jon Doe");
});

test("cannot create appointment with end Date before of start date", () => {
  const startsAt = getFutureDate('2023-10-17');
  const endsAt = getFutureDate('2023-10-12');

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
