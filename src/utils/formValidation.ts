
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




export const Gender = ["MALE", "FEMALE"] as const;
export const Role = ["ADMIN", "USER"] as const;
export const Status = ["ACTIVE", "BLOCKED"] as const;
export const HealthStatus = ['HEALTHY', 'SICK', 'INJURED'] as const
export const PetSize = ['Large', 'Medium', 'Small'] as const



export const addPetValidationSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  species: z.string().min(3, "Species must be at least 3 characters long"),
  gender:z.enum(Gender,{required_error:"Please select a value"}),
  age: z.string().min(1, "Enter the age of the pet"),
  photos: z.string().url("Enter a valid URL"),
  healthStatus: z.string().min(3, "Health status must be at least 3 characters long"),
  breed: z.string().min(3, "Breed must be at least 3 characters long"),
  size: z.enum(PetSize,{required_error:"Please select a value"}),
  location: z.string().min(3, "Location must be at least 3 characters long"),
  specialNeeds: z.string().min(3, "Special needs must be at least 3 characters long"),
  temperament: z.string().min(3, "Temperament must be at least 3 characters long"),
  medicalHistory: z.string().min(10, "Medical history must be at least 10 characters long"),
  description: z.string().min(10, "Description must be at least 10 characters long"),
  adoptionRequirements: z.string().min(10, "Adoption requirements must be at least 10 characters long"),
})



