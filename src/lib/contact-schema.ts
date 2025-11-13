import { z } from 'zod';

// Base schema for all form types
const baseSchema = z.object({
    name: z
        .string()
        .min(1, 'กรุณากรอกชื่อ')
        .min(2, 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร'),
    email: z
        .string()
        .min(1, 'กรุณากรอกอีเมล')
        .email('รูปแบบอีเมลไม่ถูกต้อง'),
    phone: z
        .string()
        .min(1, 'กรุณากรอกเบอร์โทรศัพท์')
        .regex(/^[0-9]{9,10}$/, 'เบอร์โทรไม่ถูกต้อง')
        .transform((val) => val.replace(/-/g, '')),
    company: z.string().optional(),
});

// Schema for appointment form
export const appointmentSchema = baseSchema.extend({
    formType: z.literal('appointment'),
    date: z.date({
        message: 'กรุณาเลือกวันที่',
    }),
    time: z.string().min(1, 'กรุณาเลือกเวลา'),
    message: z.string().optional(),
});

// Schema for message form
export const messageSchema = baseSchema.extend({
    formType: z.literal('message'),
    message: z
        .string()
        .min(1, 'กรุณากรอกข้อความ')
        .max(500, 'ข้อความต้องไม่เกิน 500 ตัวอักษร'),
    date: z.date().optional(),
    time: z.string().optional(),
});

// Union schema that handles both form types
export const contactFormSchema = z.discriminatedUnion('formType', [
    appointmentSchema,
    messageSchema,
]);

// Type inference from schema
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type AppointmentFormData = z.infer<typeof appointmentSchema>;
export type MessageFormData = z.infer<typeof messageSchema>;
