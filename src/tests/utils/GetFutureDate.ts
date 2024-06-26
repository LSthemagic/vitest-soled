import { setYear, parseISO } from "date-fns";

/**
 * @LSthemagic
 * Receives "2022-08-10" and return "2023-08-10"
 */
export function getFutureDate(date: string): Date {
  return setYear(parseISO(date), new Date().getFullYear() + 1);
}
