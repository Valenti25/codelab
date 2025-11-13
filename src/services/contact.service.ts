import axios from "axios";

const baseURL =
  (typeof window === "undefined" ? process.env.API_URL : process.env.NEXT_PUBLIC_API_URL) ||
  process.env.NEXT_PUBLIC_API_URL ||
  "";

export type FormType = "appointment" | "message";

export interface ContactCategoryPayload {
  id: string;
  label: string;
  shortLabel?: string;
  description?: string;
  responseTime?: string;
  team?: string;
  bgColor?: string;
  color?: string;
  icon?: {
    displayName: string;
  };
}

export interface ContactLeadPayload {
  formType?: FormType;

  // ใน payload ตัวอย่างที่ใช้งานได้จริง ไม่เห็น field นี้
  // เลยทำเป็น optional ไว้ เผื่อฟอร์มอื่นต้องใช้
  service?: "omni" | "bot" | "crm" | "integration" | "other";

  name: string;
  company?: string | null;
  email: string;
  phone: string;
  message?: string | null;

  // สำหรับโหมดนัดหมาย
  date?: string | Date | null; // YYYY-MM-DD หรือ Date
  time?: string | null; // "HH:mm" หรือ "HH:mm-HH:mm"
  timezone?: string;
  source?: string;

  // 👇 ใช้สำหรับหมวดหมู่การติดต่อ (Partnership / Support / Sales & Demo)
  contactCategory?: ContactCategoryPayload;
}

export interface ContactLeadResponse {
  message: "created";
  id: number;
  mode: "appointment" | "message";
  saved: {
    callback_date: string | null;
    callback_time_start: string | null;
    callback_time_end: string | null;
  };
}

export async function submitContactLead(payload: ContactLeadPayload) {
  const url = `${baseURL}/contact`;
  console.log("submitContactLead URL =", url, "payload =", payload);

  const { data } = await axios.post(url, payload, {
    headers: { "Cache-Control": "no-store" },
    timeout: 15000,
  });

  console.log("submitContactLead response =", data);
  return data as ContactLeadResponse;
}
