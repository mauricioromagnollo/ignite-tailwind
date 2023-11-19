import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

function Control(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

export type InputRootPros = ComponentProps<'div'>

function Root(props: InputRootPros) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

export const Input = {
  Root,
  Prefix,
  Control,
}
