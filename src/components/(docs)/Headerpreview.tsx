'use clie'
import { BlockDisplay } from '@/components/(docs)/(blocks)/block-display';

interface SimpleBlocksDisplayProps {
  blocks: string[];
}

export default function SimpleBlocksDisplay({ blocks }: SimpleBlocksDisplayProps) {
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
