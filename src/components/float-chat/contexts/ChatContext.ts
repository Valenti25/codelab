import { ChatDTO } from '@/services/chatRoom.service';
import { createContext, Dispatch, SetStateAction, useContext } from 'react';

interface ChatContextProps {
    userId: string;
    roomId: string;
    accessToken: string;
    chats: ChatDTO[];


    setUserId: Dispatch<SetStateAction<string>>;
    setRoomId: Dispatch<SetStateAction<string>>;
    setAccessToken: Dispatch<SetStateAction<string>>;
    setChats: Dispatch<SetStateAction<ChatDTO[]>>;
}

export const ChatContext = createContext<ChatContextProps>(null as unknown as ChatContextProps);
export const useChatContext = () => useContext(ChatContext);