import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import { BaseColor } from "@/components/registry/registry-base-colors"
import { Style } from "@/components/registry/style"

type Config = {
  style: Style["name"]
  theme: BaseColor["name"]
  radius: number
}

const configAtom = atomWithStorage<Config>("config", {
  style: "new-york",
  theme: "zinc",
  radius: 0.5,
})

export function useConfig() {
  return useAtom(configAtom)
}