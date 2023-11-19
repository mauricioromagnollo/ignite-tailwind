'use client'

import { useMemo } from 'react'
import { User } from 'lucide-react'

import { useFileInput } from './root'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewUrl = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewUrl === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    )
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={previewUrl}
        className="h-16 w-16 rounded-full object-cover"
        alt="Profile"
      />
    )
  }
}
