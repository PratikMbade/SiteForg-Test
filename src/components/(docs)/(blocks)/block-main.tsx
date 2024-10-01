"use client"; // Client-side component
import { useEffect, useState } from 'react';
import { BlockDisplay } from '@/components/(docs)/(blocks)/block-display';
import { getAllBlockIds } from '@/lib/blocks';

export function BlocksPage() {
  const [blocks, setBlocks] = useState<string[]>([]);

  useEffect(() => {
    async function fetchBlocks() {
      const blockIds = await getAllBlockIds();
      setBlocks(
        blockIds.filter(
          (name) =>
            !name.startsWith("chart-") &&
            !name.startsWith("sidebar-01") &&
            !name.startsWith("login-01")
        )
      );
    }

    fetchBlocks();
  }, []);

  return (
    <div className="gap-3 md:flex md:flex-row-reverse md:items-start">
      <div className="grid flex-1 gap-24 lg:gap-48">
        {blocks.map((name, index) => (
          <BlockDisplay key={`${name}-${index}`} name={name} />
        ))}
      </div>
    </div>
  );
}
