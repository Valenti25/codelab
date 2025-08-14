'use client'

import { MessageBubble } from "./ChatBubble"
import NotFound from "@/components/ui/not-found"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { getMessageByBoomId } from "@/services/chatRoom.service"
import { useChatContext } from "./contexts/ChatContext"


const RoomMessage = () => {
    const { roomId, chats, setChats } = useChatContext()

    const pageSize: number = 10
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [hasMore, setHasMore] = useState<boolean>(true)

    const [isFetching, setIsFetching] = useState<boolean>(true)

    // TODO
    const fetchDataNext = async () => {
        const nextPage: number = currentPage + 1

        if (nextPage > totalPage) {
            return setHasMore(false)
        } else {
            const res = await getMessageByBoomId(roomId, { page: currentPage + 1, limit: pageSize, orderBy: 'desc', sort: '_id', search: '' })
            setChats(prev => prev.concat(res.chats))
            setCurrentPage(nextPage)
        }
    }

    const fetchData = async () => {
        try {
            setIsFetching(true)
            const res = await getMessageByBoomId(roomId, { page: currentPage, limit: pageSize, orderBy: 'desc', sort: '_id', search: '' })
            setTotalPage(res.totalPages)
            setChats(res.chats)
            setIsFetching(false)

        } catch (error) {
            console.log('Error fetching', error)
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roomId]);


    return (
        <div id='roomChat' className="min-h-[320px] max-h-[320px] flex flex-col-reverse overflow-y-auto p-3 room" >
            {!isFetching && chats.length === 0 && (
                <NotFound height={600} />
            )}

            {!isFetching && chats.length > 0 && (
                <InfiniteScroll
                    dataLength={chats.length}
                    next={fetchDataNext}
                    className="flex flex-col-reverse h-max gap-3"
                    inverse={true}
                    hasMore={hasMore}
                    loader={<p className="text-center text-sm">Loading.</p>}
                    scrollableTarget="roomChat"
                    pullDownToRefreshThreshold={500}
                >

                    {chats.map((item) => (
                        <MessageBubble key={item._id} chat={item} />
                    ))}

                </InfiniteScroll>
            )}
        </div>
    )
}

export default RoomMessage