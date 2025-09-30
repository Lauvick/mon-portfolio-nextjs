"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface ImageViewerProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  imageSrc: string;
  title: string;
}

export function ImageViewer({ isOpen, onOpenChange, imageSrc, title }: ImageViewerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          {isOpen && (
            <div className="relative w-full h-auto aspect-[16/9]">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
