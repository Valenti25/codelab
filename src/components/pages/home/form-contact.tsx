'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { TextArea } from '@/components/ui/text-area'
import { useTranslation } from 'react-i18next'
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  submitContactLead,
  type ContactLeadPayload,
  type ContactCategoryPayload,
} from '@/services/contact.service'

// 👇 category ที่จะให้ฟอร์มนี้ยิงเข้าไป (ใช้แบบเดียวกับที่เห็นในแอดมิน)
const SUPPORT_CATEGORY: ContactCategoryPayload = {
  id: 'support',
  label: 'Technical Support',
  shortLabel: 'ซัพพอร์ต',
  description: 'แก้ไขปัญหา • ช่วยเหลือการใช้งาน',
  responseTime: 'ทันที',
  team: 'ทีมซัพพอร์ต',
  bgColor: '#fef2ee',
  color: '#f24822',
  icon: { displayName: 'Wrench' },
}

export function FormContact() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const company = String(formData.get('company') || '').trim()
    const subject = String(formData.get('subject') || '').trim()
    const messageRaw = String(formData.get('message') || '').trim()

    // กัน user เผลอกดส่งทั้ง ๆ ที่ไม่มีข้อความ (backend ต้องการ message เสมอในโหมด message)
    if (!messageRaw && !subject) {
      alert('กรุณากรอกหัวข้อหรือละเอียดข้อความก่อนส่ง 🙏')
      return
    }

    const message = subject ? `[${subject}] ${messageRaw || ''}` : messageRaw

    const payload: ContactLeadPayload = {
      formType: 'message',
      name,
      email,
      phone,
      company: company || null,
      message,
      timezone: 'Asia/Bangkok',
      source: 'website', // ให้เหมือนของเดิมในแอดมิน
      contactCategory: SUPPORT_CATEGORY, // map ไปเป็น service = 'support' ใน backend
    }

    try {
      setIsSubmitting(true)
      console.log('submitContactLead payload =', payload)
      const res = await submitContactLead(payload)
      console.log('submitContactLead response =', res)

      alert('ส่งข้อมูลเรียบร้อย ขอบคุณที่ติดต่อเรา 🙏')
      form.reset()
    } catch (err) {
      console.error('submitContactLead error =', err)
      alert('ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form className="w-full max-w-xl" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <InputGradient
              id="name"
              name="name"
              type="text"
              placeholder={t('formContact.name')}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <InputGradient
              id="email"
              name="email"
              type="email"
              placeholder={t('formContact.email')}
              required
            />
          </LabelInputContainer>
        </div>

        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer className="mb-4">
            <InputGradient
              id="phone"
              name="phone"
              type="tel"
              placeholder={t('formContact.phone')}
              maxLength={15}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <InputGradient
              id="company"
              name="company"
              type="text"
              placeholder={t('formContact.company')}
            />
          </LabelInputContainer>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer className="mb-4">
            <InputGradient
              id="subject"
              name="subject"
              type="text"
              placeholder={t('formContact.subject')}
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-8">
          <TextArea
            id="message"
            name="message"
            placeholder={t('formContact.message')}
            className="resize-none appearance-none"
            rows={4}
            required // ให้ตรงกับ backend ที่ต้องการ message เสมอในโหมด message
          />
        </LabelInputContainer>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-max w-full lg:w-max rounded-md bg-gradient-to-b from-primary to-primary-light px-6 py-2.5 text-sm text-white shadow-[0px_1px_3px_0px_#FFFFFF4D_inset] drop-shadow-2xl drop-shadow-primary/30"
        >
          {isSubmitting ? t('formContact.submitting') ?? 'กำลังส่ง...' : t('formContact.submit')}
        </Button>
      </form>

      <style jsx global>{`
        @supports (-webkit-touch-callout: none) {
          .ios-input-no-zoom {
            font-size: 16px !important;
            transform: scale(0.875);
            transform-origin: top left;
            width: calc(100% / 0.875);
          }
        }
      `}</style>
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('flex w-full flex-col space-y-2', className)}>{children}</div>
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputGradient = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, onInput, ...props }, ref) => {
    const radius = 100
    const [visible, setVisible] = React.useState(false)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({
      currentTarget,
      clientX,
      clientY,
    }: {
      currentTarget: HTMLElement
      clientX: number
      clientY: number
    }) {
      const { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }

    const isPhoneField = id === 'phone' || type === 'tel'

    const handlePhoneBeforeInput = (
      e: React.FormEvent<HTMLInputElement> & { data?: string },
    ) => {
      if (!isPhoneField) return
      const anyEvt = e as unknown as InputEvent
      const data = anyEvt.data
      if (typeof data === 'string' && /\D/.test(data)) {
        anyEvt.preventDefault?.()
      }
    }

    const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
      if (!isPhoneField) {
        onInput?.(e)
        return
      }
      const target = e.currentTarget
      const cleaned = target.value.replace(/\D+/g, '')
      if (cleaned !== target.value) target.value = cleaned
      onInput?.(e)
    }

    const phoneExtraProps = isPhoneField
      ? ({
          inputMode: 'numeric',
          autoComplete: 'tel',
          pattern: '[0-9]*',
          enterKeyHint: 'send',
          onBeforeInput: handlePhoneBeforeInput,
          onInput: handlePhoneInput,
          maxLength: (props).maxLength ?? 15,
        } as const)
      : ({} as const)

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
              #6E42FF,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <input
          id={id}
          type={type}
          className={cn(
            'ios-input-no-zoom',
            'flex h-10 w-full rounded-md border border-black/10 bg-gray-50 px-3 py-2 text-sm text-black shadow-input transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-600 placeholder:opacity-50 focus-visible:ring-[2px] focus-visible:ring-neutral-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-none dark:bg-neutral-900/80 dark:text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-600',
            className,
          )}
          ref={ref}
          {...phoneExtraProps}
          {...props}
        />
      </motion.div>
    )
  },
)

InputGradient.displayName = 'InputGradient'
