import { z } from "zod";

export const login_schema = z.object({
  Email: z.string().email({ message: "Invalid email address" }),
  Password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});

export const register_schema = z.object({
  Username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  Email: z.string().email({ message: "Invalid email address" }),
  Phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" }), // Example pattern for international phone numbers
  Gender: z.enum(["true", "false"], {
    message: "Gender must be true or false",
  }), // Adjust based on your actual values
  Password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});
export const profile_schema = z.object({
  Username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  Email: z.string().email({ message: "Invalid email address" }),
  Phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
});
export const business_schema = z.object({
  Name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  Header: z
    .string()
    .min(3, { message: "Header must be at least 3 characters long" }),
  Description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long" }),
  TargetAmount: z
    .number()
    .positive({ message: "Target amount must be a positive number" }),
  Deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Deadline must be in YYYY-MM-DD format",
  }),
  Charity: z.enum(["true", "false"], {
    message: "Charity must be true or false",
  }),
  Percent: z
    .number()
    .min(0)
    .max(100, { message: "Percent must be between 0 and 100" }),
});
