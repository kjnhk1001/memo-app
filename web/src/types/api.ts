export type ApiResponse<T> = {
  success: boolean;
  data: T | null;
  error: ErrorInfo | null;
};

export type ErrorInfo = {
  code: string;
  message: string;
};
