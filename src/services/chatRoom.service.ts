import { useAxios } from "@/hooks/useAxios"
import { IBaseFilter, PaginatedResult } from "./interfaces"
import { z } from "zod";
import { formChatSchema } from "@/schemas/chat.schema";
import { useAxiosGuest } from "@/hooks/useAxiosGuest";


export enum TRole {
    "user" = "User",
    "admin" = "Admin"
}

export type AdminDTO = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export type AttachmentDTO = {
    fileName: string;
    fileType: string;
    fileSize: number;
    url?: string;
}

export type ChatDTO = {
    _id: string;
    createdAt: string;
    updatedAt: string;

    sender: AdminDTO | UserDTO;
    senderModel: TRole;
    message: string;
    attachments: AttachmentDTO[];
    read: boolean;
    roomId: string;
}


export type UserDTO = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export type RoomChatDTO = {
    _id: string;
    chats: ChatDTO[];
    unreadCount: number;
    user: UserDTO;
}


export type RoomChatByIdDTO = {
    _id: string;
    chats: ChatDTO[];
    user: string | UserDTO,
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export type CreateChatDTO = Omit<ChatDTO, '_id' | 'createdAt' | 'updatedAt' | "sender" | "senderModel" | "read" | "attachments"> & {
    attachments: string[];
}

export type ResCreateRoomChatDTO = RoomChatDTO & { accessToken: string }

export const getAllRoomChat = async (filter: IBaseFilter): Promise<PaginatedResult<RoomChatDTO>> => {
    const res = await useAxios.get('/chat-rooms',
        {
            params: filter
        }
    )
    return res.data
}

export const getMessageByBoomId = async (id: string, filter: IBaseFilter): Promise<RoomChatByIdDTO> => {
    const res = await useAxios.get(`/chat-rooms/${id}`,
        {
            params: filter
        }
    )
    return res.data
}

export const sendMessageAdmin = async (payload: CreateChatDTO): Promise<RoomChatByIdDTO> => {
    const res = await useAxios.post(`/chats/admin`, payload)
    return res.data
}

export const sendMessageGuest = async (accessToken: string, payload: CreateChatDTO): Promise<RoomChatByIdDTO> => {
    const res = await useAxiosGuest.post(`/chats/guest`, payload, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    return res.data
}

// PUBLIC
export const createChatGuest = async (payload: z.infer<typeof formChatSchema>): Promise<ResCreateRoomChatDTO> => {
    const res = await useAxiosGuest.post(`/chat-rooms`, payload)
    return res.data
}