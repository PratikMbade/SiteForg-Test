'use client'
import { Monitor, Smartphone, Tablet } from 'lucide-react';
import React from 'react';
import { useState } from 'react';

export function HeaderPreview() {
  const [size, setSize] = useState('desktop');

  return (
    <>
      <button onClick={() => setSize('mobile')} style={{ marginRight: '10px' }}>
        <Smartphone/>
      </button>
      <button onClick={() => setSize('tablet')} style={{ marginRight: '10px' }}>
        <Tablet/>
      </button>
      <button onClick={() => setSize('desktop')} style={{ marginRight: '10px' }}>
        <Monitor/>
      </button>


      <style jsx>{`
        .resize-container {
          border: 1px solid #ccc;
          padding: 10px;
          margin-top: 20px;
          transition: width 0.3s ease;
        }

        .resize-container.mobile {
          width: 375px; /* Mobile size */
        }

        .resize-container.tablet {
          width: 768px; /* Tablet size */
        }

        .resize-container.desktop {
          width: 1024px; /* Desktop size */
        }
      `}</style>
    </>
  );
}
