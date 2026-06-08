// @ts-check

/**
 * Create an appointment n days from now
 * @param {number} days
 * @param {number} [now]
 * @returns {Date}
 */
export function createAppointment(days, now = undefined) {
  const base = now !== undefined ? new Date(now) : new Date();
  base.setDate(base.getDate() + days);
  return base;
}

/**
 * Generate the ISO 8601 timestamp from a Date
 * @param {Date} appointmentDate
 * @returns {string}
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment from ISO 8601 string
 * @param {string} timestamp
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>}
 */
export function getAppointmentDetails(timestamp) {
  const date = new Date(timestamp);
  return {
    year: date.getFullYear(),
    month: date.getMonth(),       // 0–11
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

/**
 * Update an appointment with given options
 * @param {string} timestamp
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>}
 */
export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp);

  if (options.year   !== undefined) date.setFullYear(options.year);
  if (options.month  !== undefined) date.setMonth(options.month);
  if (options.date   !== undefined) date.setDate(options.date);
  if (options.hour   !== undefined) date.setHours(options.hour);
  if (options.minute !== undefined) date.setMinutes(options.minute);

  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

/**
 * Difference between two appointments in rounded seconds
 * @param {string} timestampA
 * @param {string} timestampB
 * @returns {number}
 */
export function timeBetween(timestampA, timestampB) {
  const msA = new Date(timestampA).getTime();
  const msB = new Date(timestampB).getTime();
  return Math.round(Math.abs(msB - msA) / 1000);
}

/**
 * Check if an appointment is in the future
 * @param {string} appointmentTimestamp
 * @param {string} currentTimestamp
 * @returns {boolean}
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return new Date(appointmentTimestamp) > new Date(currentTimestamp);
}