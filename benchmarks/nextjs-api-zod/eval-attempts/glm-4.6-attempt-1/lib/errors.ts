import type { ZodIssue } from "zod";

type ErrorCode = "validation_error" | "not_found" | "conflict";

export interface ErrorResponse {
  error: {
    code: ErrorCode;
    message: string;
    issues?: Array<{
      path: string;
      message: string;
    }>;
  };
}

export function createErrorResponse(
  code: ErrorCode,
  message: string,
  issues?: Array<{ path: string; message: string }>
): ErrorResponse {
  const response: ErrorResponse = {
    error: {
      code,
      message,
    },
  };
  
  if (issues) {
    response.error.issues = issues;
  }
  
  return response;
}

export function mapZodIssuesToResponse(issues: ZodIssue[]): Array<{ path: string; message: string }> {
  return issues.map(issue => ({
    path: issue.path.join('.'),
    message: issue.message,
  }));
}