import { Button } from '@/components'
import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid grid-cols-profile gap-3">
      <Image
        src="https://github.com/mauricioromagnollo.png"
        className="h-10 w-10 rounded-full"
        alt="Profile Image"
        width={40}
        height={40}
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Maurício Romagnollo
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          mauricioromagnollo@gmail.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
