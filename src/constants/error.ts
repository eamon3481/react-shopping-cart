export const ERROR_TYPE = {
  API: 'API_ERROR',
  UNKNOWN: 'UNKNOWN_ERROR',
} as const;

type ErrorTypes = typeof ERROR_TYPE[keyof typeof ERROR_TYPE];

export class CustomError extends Error {
  type: ErrorTypes;
  statusCode?: number;

  constructor(type: ErrorTypes, statusCode?: number) {
    super(type);
    this.type = type;
    this.statusCode = statusCode;
  }
}
