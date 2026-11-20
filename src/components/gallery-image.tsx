import { useEffect, useRef, useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

// Cropped client assets can replace src; fallbackSrc remains a provisional photo.
// Asset pointers are passed as pointer.url, never as the pointer object itself.
export function GalleryImage({
  src,
  fallbackSrc,
  alt,
  className,
  priority = false,
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const [failedSources, setFailedSources] = useState<string[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);
  const currentSource = failedSources.includes(src) ? fallbackSrc : src;
  useEffect(() => {
    const image = imageRef.current;
    if (currentSource && image?.complete && image.naturalWidth === 0) {
      setFailedSources((sources) =>
        sources.includes(currentSource) ? sources : [...sources, currentSource],
      );
    }
  }, [currentSource]);
  if (!currentSource || failedSources.includes(currentSource)) {
    return (
      <div
        role="img"
        aria-label={`${alt} — imagem indisponível`}
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-3 bg-muted text-muted-foreground",
          className,
        )}
      >
        <ImageOff aria-hidden="true" />
        <span className="px-4 text-center text-sm">Imagem indisponível</span>
      </div>
    );
  }
  return (
    <img
      ref={imageRef}
      src={currentSource}
      alt={alt}
      width={900}
      height={1200}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setFailedSources((sources) => [...sources, currentSource])}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
