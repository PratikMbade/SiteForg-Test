'use client'
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const CopyButton = ({ gitCloneCommand }: { gitCloneCommand: string }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className='relative my-1'>
      {/* Wrap the command in a bash code block using backticks */}
     
      <CopyToClipboard text={gitCloneCommand} onCopy={() => setCopied(true)}>
        <button className="bg-neutral-700 rounded-xl px-3 py-1">
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </CopyToClipboard>
    </div>
  );
}

