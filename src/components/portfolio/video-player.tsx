"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  videoSrc: string;
  title: string;
}

export function VideoPlayer({ isOpen, onOpenChange, videoSrc, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Gère la lecture/pause quand la modale s'ouvre/se ferme
  useEffect(() => {
    if (videoRef.current) {
      if (isOpen) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-full p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video">
          {isOpen && ( // Important pour recharger la source quand on change de vidéo
            <video
              ref={videoRef}
              className="w-full h-full"
              controls
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={videoSrc} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
