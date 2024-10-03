import { Metadata } from "next"
import { notFound } from "next/navigation"

import { getAllBlockIds, getBlock } from "@/lib/blocks"
import { absoluteUrl, cn } from "@/lib/utils"

import { Style, styles } from "@/components/registry/style"


import React from "react"
import { BlockChunk } from "@/components/(docs)/(blocks)/block-chunk"
import { BlockWrapper } from "@/components/(docs)/(blocks)/block-wrapper"

export async function generateMetadata({
  params,
}: {
  params: {
    style: Style["name"]
    name: string
  }
}): Promise<Metadata> {
  const { name, style } = params
  const block = await getBlock(name, style)

  if (!block) {
    return {}
  }

  return {
    title: block.name,
    description: block.description,
    openGraph: {
      title: block.name,
      description: block.description,
      type: "article",
      url: absoluteUrl(`/blocks/${block.name}`),
    
    },
    twitter: {
      card: "summary_large_image",
      title: block.name,
      description: block.description,
      creator: "@shadcn",
    },
  }
}

export async function generateStaticParams() {
  const blockIds = await getAllBlockIds()
  return styles
    .map((style:any) =>
      blockIds.map((name) => ({
        style: style.name,
        name,
      }))
    )
    .flat()
}

export default async function BlockPage({
  params,
}: {
  params: {
    style: Style["name"]
    name: string
  }
}) {
  const { name, style } = params
  const block = await getBlock(name, style)

  if (!block) {
    return notFound()
  }

  const Component = block.component

  const chunks = block.chunks?.map((chunk) => ({ ...chunk }))
  delete block.component
  block.chunks?.map((chunk) => delete chunk.component)

  return (
    <>
      {/* <ThemesStyle /> */}
      <div
        className={cn(
          "themes-wrapper bg-background",
          block.container?.className
        )}
      >
        <BlockWrapper block={block}>
          <Component />
          {chunks?.map((chunk, index) => (
            <BlockChunk
              key={chunk.name}
              block={block}
              chunk={block.chunks?.[index]}
            >
              <chunk.component />
            </BlockChunk>
          ))}
        </BlockWrapper>
      </div>
    </>
  )
}