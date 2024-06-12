import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(4, "Password must be at least 4 characters long"),
});

export const registerValidationSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(4, "Password must be at least 4 characters long"),
  gender: z.string(),
  profilePicture: z.string().url("Enter a valid URL"),
  age: z.string().min(1, "Enter your age"),
  location: z.string().min(3, "Enter your location"),
  contactNumber: z.string().min(10, "Enter a valid contact number"),
});

export const adoptionRequestValidationSchema = z.object({
  userName: z.string().min(3, "Enter your name"),
  userEmail: z.string().email("Please enter a valid email address"),
  userContactNumber: z.string().min(8, "Enter a valid contact number"),
  petOwnershipExperience: z
    .string()
    .min(4, "Enter your experience with pet ownership"),
});



export const changePasswordValidationSchema = z.object({
  oldPassword: z.string().min(4, "Password must be at least 4 characters long").optional(),
  newPassword: z.string().min(4, "Password must be at least 4 characters long"),
  confirmPassword: z.string().min(4, "Password must be at least 4 characters long"),

})
