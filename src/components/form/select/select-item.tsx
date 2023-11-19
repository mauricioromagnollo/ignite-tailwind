'use client'

import * as RadixSelect from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelectItemProps = RadixSelect.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <RadixSelect.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...props}
    >
      <RadixSelect.ItemText className="text-black">{text}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  )
}
