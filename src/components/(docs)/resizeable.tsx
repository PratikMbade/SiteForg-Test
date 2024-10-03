// ResizableIframe.tsx
import React, { useEffect, useState } from 'react';

const ResizableIframe = ({ src }: { src: string }) => {
  const [dimensions, setDimensions] = useState({ width: 1024, height: 768 });

  // Update iframe dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth * 0.7, height: window.innerHeight * 0.7 });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        className="resizable-frame"
        style={{
          width: dimensions.width,
          height: dimensions.height,
          border: '1px solid #ddd',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <iframe
          src={src}
          title="Component Preview"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default ResizableIframe;
