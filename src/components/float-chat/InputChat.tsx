/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'

import { uid } from 'uid';
import styles from './styles.module.css'
import { Button } from "@/components/ui/button"
import { LucideImageUp, LucideSend, } from 'lucide-react'
import { ChangeEvent, useRef, useState } from "react"
import { sendMessageGuest } from '@/services/chatRoom.service'
import { toBase64 } from '@/utils/toBase64'
import PreviewUpload from './PreviewUpload'
import { useChatContext } from './contexts/ChatContext';


const InputChat = () => {

    const { roomId, accessToken } = useChatContext()

    const ref = useRef<HTMLDivElement>(null)
    const uploadRef = useRef<HTMLInputElement>(null)

    const [files, setFiles] = useState<{ key: string; string: string }[]>([])
    const [message, setMessage] = useState<string>('')


    // TODO
    const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {

        const selection = window.getSelection() as Selection;
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const preCaretRange = range.cloneRange();
            preCaretRange.collapse(true);
        }

        const newMessage = event.target.innerText.replace(/\r?\n/g, '\n');
        setMessage(newMessage);
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit()
        }
    };

    const handleSubmit = async () => {
        await sendMessageGuest(accessToken, {
            message: message,
            attachments: files.map(item => item.string),
            roomId: roomId
        })

        setFiles([]);

        if (message) {
            setMessage('');
            if (ref.current) {
                ref.current.innerText = ''
            }
        }
    };

    const handelChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
        const fileInputs = e.target.files
        const files = Array.from(fileInputs ?? [])

        const result = await Promise.all(files.map(file => toBase64(file)))

        setFiles(prev => ([...prev, ...result.map(item => ({
            key: uid(),
            string: item
        }))]))

        if (uploadRef?.current) {
            uploadRef.current.value = ''
        }

    }

    return (
        <div className="w-full flex items-start justify-start gap-3 pt-3 bg-white border-t border-neutral-100">
            <div className="relative w-8">
                <Button onClick={() => { uploadRef?.current && uploadRef.current.click() }} size="icon" variant="ghost">
                    <LucideImageUp width="18px" height="18px" />
                </Button>
                <input type="file" className="hidden" onChange={handelChangeImage} accept="image/png, image/jpeg, application/pdf" ref={uploadRef} multiple />
            </div>

            <div className="w-full rounded-lg bg-neutral-200 ">

                {files.length > 0 && (
                    <div className='flex flex-row flex-wrap pt-3 px-3'>
                        {files.map(file => (
                            <PreviewUpload key={file.key} fileString={file.string} handleDelFile={() => { setFiles(prev => [...prev].filter(item => item.key !== file.key)) }} />
                        ))}
                    </div>
                )}

                <div
                    ref={ref}
                    contentEditable
                    suppressContentEditableWarning={true}
                    onKeyDown={handleKeyDown}
                    onInput={handleChange}
                    role="textbox"
                    tabIndex={0}
                    className={message.length === 0 ? styles.inputBox : ''}
                    style={{ width: '100%', outline: 'none', position: 'relative', padding: "0.5rem" }}
                    aria-multiline="true" data-placeholder={!ref?.current || ref?.current?.innerText.length === 0 ? "พิมพ์ข้อความ..." : ''}
                />
            </div>
            <Button onClick={handleSubmit} size="icon" className='w-10 h-10 min-w-[40px]'><LucideSend width="14px" height="14px" /></Button>
        </div>
    )
}

export default InputChat