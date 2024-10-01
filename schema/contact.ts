import { z } from "zod";

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters long." })
        .max(50, { message: "Name cannot exceed 50 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    address: z
        .string()
        .min(2, { message: "Address must be at least 2 characters long." })
        .max(50, { message: "Address cannot exceed 50 characters." }),
    phone: z
        .string()
        .min(2, { message: "Phone number must be at least 2 characters long." })
        .max(50, { message: "Phone number cannot exceed 50 characters." }),
    message: z
        .string()
        .min(2, { message: "Message must be at least 2 characters long." })
        .max(100, { message: "Message cannot exceed 100 characters." }),
});
