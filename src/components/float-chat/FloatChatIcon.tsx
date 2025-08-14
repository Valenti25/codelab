'use client'

import { MessageCircleMore, X } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '../ui/button'
// import { ToastAction } from '../ui/toast'
// import { useToast } from '../ui/use-toast'
import { formChatSchema } from '@/schemas/chat.schema'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '../ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChatDTO } from '@/services/chatRoom.service'
import MsgContainer from './MsgContainer'
import { ChatContext } from './contexts/ChatContext'
import { useTranslation } from 'react-i18next'
// import { socket } from '@/lib/io'

const FloatChatIcon = () => {
   //    const { toast } = useToast()
   const { t } = useTranslation()

   const [accessToken, setAccessToken] = useState<string>('')
   const [roomId, setRoomId] = useState<string>('')
   const [userId, setUserId] = useState<string>('')
   const [isOpen, setIsOpen] = useState<boolean>(false)
   const [chats, setChats] = useState<ChatDTO[]>([])

   const [isUnread, setIsUnread] = useState<boolean>(false)

   const {
      register,
      handleSubmit,
      //   reset,
      formState: { errors, isSubmitting },
   } = useForm<z.infer<typeof formChatSchema>>({
      resolver: zodResolver(formChatSchema),
   })

   // TODO
   const onSubmit: SubmitHandler<z.infer<typeof formChatSchema>> = async (data) => {
      console.log(data)
      alert('กำลังปรับปรุงระบบ ขออภัยในความไม่สะดวก')
   }

   //    useEffect(() => {
   //       if (typeof window !== 'undefined') {
   //          const accessToken: string | null = sessionStorage.getItem('accessToken')
   //          const roomId: string | null = sessionStorage.getItem('roomId')
   //          const userId: string | null = sessionStorage.getItem('userId')

   //          accessToken && setAccessToken(accessToken)
   //          roomId && setRoomId(roomId)
   //          userId && setUserId(userId)
   //       }
   //    }, [])

   // useEffect(() => {
   //    const io = socket(accessToken)

   //    io.on('connect', () => {
   //       io.emit('userLogin', {
   //          userData: {
   //             _id: String(userId),
   //             accessToken: accessToken,
   //          },
   //       })
   //    })

   //    if (roomId) {
   //       io.on('sendMessage', (payload: ChatDTO) => {
   //          if (payload.roomId === roomId) {
   //             if (payload.senderModel.toLowerCase() === 'admin') {
   //                setIsUnread(true)
   //             }
   //             setChats((prev) => [payload, ...prev])
   //          }
   //       })
   //    }

   //    io.on('disconnect', () => {})

   //    return () => {
   //       io.off('connect', () => {})
   //       io.off('sendMessage', () => {})
   //       io.off('disconnect', () => {})
   //    }

   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, [roomId, accessToken, userId])

   return (
      <ChatContext.Provider
         value={{
            accessToken,
            roomId,
            userId,
            chats,
            setAccessToken,
            setRoomId,
            setUserId,
            setChats,
         }}
      >
         {isOpen ? (
            <Card className="animate-scale-up fixed right-4 bottom-4 z-50 w-96 max-w-[calc(100vw-2rem)] origin-bottom-right py-0">
               <CardHeader className="border-b border-neutral-200 p-3">
                  <CardTitle className="flex w-full items-center justify-between pl-2 text-sm">
                     <div className="flex items-center justify-start gap-2">
                        <div className="grid h-9 w-9 place-content-center rounded-full bg-primary text-xs">
                           <MessageCircleMore color="white" width={18} height={18} />
                        </div>
                        <p>{t('formContact.chatTitle')}</p>
                     </div>
                     <Button
                        onClick={() => {
                           setIsOpen(false)
                        }}
                        variant="ghost"
                        size="icon"
                     >
                        <X width={16} height={16} />
                     </Button>
                  </CardTitle>
               </CardHeader>
               <CardContent className="px-0 pt-0 pb-4">
                  {roomId && <MsgContainer />}

                  {!roomId && (
                     <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 px-4">
                        <div className="grid gap-2">
                           <Input
                              {...register('name')}
                              id="name"
                              className="text-sm"
                              placeholder={t('formContact.name')}
                           />
                           {errors?.name && (
                              <small className="text-destructive">{errors?.name?.message}</small>
                           )}
                        </div>
                        <div className="grid gap-2">
                           <Input
                              {...register('email')}
                              id="email"
                              className="text-sm"
                              placeholder={t('formContact.email')}
                           />
                           {errors?.email && (
                              <small className="text-destructive">{errors?.email?.message}</small>
                           )}
                        </div>
                        <div className="grid gap-2">
                           <Input
                              {...register('phone')}
                              id="phone"
                              className="text-sm"
                              placeholder={t('formContact.phone')}
                           />
                           {errors?.phone && (
                              <small className="text-destructive">{errors?.phone?.message}</small>
                           )}
                        </div>

                        <Button className="mt-2 w-full text-white">
                           {isSubmitting
                              ? t('formContact.conversation')
                              : t('formContact.conversation')}
                        </Button>
                     </form>
                  )}
               </CardContent>
            </Card>
         ) : (
            <TooltipProvider>
               <Tooltip>
                  <TooltipTrigger
                     onClick={() => {
                        setIsOpen(true)
                        setIsUnread(false)
                     }}
                     className="fixed right-6 bottom-8 z-50 grid size-12 cursor-pointer place-content-center rounded-full bg-primary text-3xl shadow-lg"
                  >
                     {isUnread && (
                        <div className="absolute top-0 left-0 h-3 w-3 rounded-full bg-red-500" />
                     )}
                     <MessageCircleMore color="white" width={28} height={28} />
                  </TooltipTrigger>
                  <TooltipContent align="center" side="left">
                     <p className="text-white">แชทกับเราผ่านเว็บไซต์</p>
                  </TooltipContent>
               </Tooltip>
            </TooltipProvider>
         )}
      </ChatContext.Provider>
   )
}

export default FloatChatIcon
