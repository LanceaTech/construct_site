"use client";

export default function PreloadResources() {
  return (
    <>
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="/fonts/inter-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Preload critical images */}
      <link
        rel="preload"
        as="image"
        href="/hero-image.jpg"
      />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
      
      {/* Preconnect to critical origins */}
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
    </>
  );
}