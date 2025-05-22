import { ApiResponse, ErrorInfo } from "../types/api";

export const successResponse = <T>(data?: T): ApiResponse<T> => {
  return {
    success: true,
    data: data ?? null,
    error: null,
  };
};

export const errorResponse = <T>(error: ErrorInfo): ApiResponse<T> => {
  return {
    success: false,
    data: null,
    error,
  };
};
