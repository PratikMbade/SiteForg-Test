import { getBlock } from "@/lib/blocks"
import { BlockPreview } from "@/components/(docs)/(blocks)/block-preview"
import { styles } from "@/components/registry/style"

export async function BlockDisplay({ name }: { name: string }) {
  console.log("name is ",name)
  const blocks = await Promise.all(
    styles.map(async (style:any) => {
      console.log("style.name",style.name)

      const block = await getBlock(name, style.name)
      const hasLiftMode = block?.chunks ? block?.chunks?.length > 0 : false

      // Cannot (and don't need to) pass to the client.
      delete block?.component
      delete block?.chunks

      return {
        ...block,
        hasLiftMode,
      }
    })
  )



  if (!blocks?.length) {
    console.log("helo i an rtyrb")
    return null
  }

  return blocks.map((block:any) => (
    <BlockPreview key={`${block.style}-${block.name}`} block={block} />
  ))
}