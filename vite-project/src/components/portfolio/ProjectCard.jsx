import React from "react";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project }) {
  // Extract YouTube video ID and thumbnail from URL (Now supports Shorts!)
  const getYouTubeData = (url) => {
    const match = url?.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^&\s?]+)/);
    const id = match ? match[1] : null;
    return id ? {
      id,
      // Special URL that forces autoplay, mutes it, hides controls, and loops it
      embedUrl: `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0`,
      link: url
    } : null;
  };

  // Text-only layout (no media)
  if (!project.videos && !project.image) {
    return (
      <div className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 p-8">
        <div className="mb-4">
          <Badge variant="secondary" className="text-xs font-mono mb-3">
            {project.date}
          </Badge>
          <h3 className="text-xl font-bold leading-tight mb-4">{project.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/5 text-primary/80 border border-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // Layout with video(s)
  if (project.videos) {
    const videoData = project.videos.map(getYouTubeData).filter(Boolean);
    
    return (
      <div className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300">
       {/* Video thumbnails - AUTOPLAYING & CLICKABLE */}
        <div 
          className={`relative ${
            videoData.length === 1 
              ? 'aspect-video' 
              : videoData.length === 2
                ? 'grid grid-cols-1 sm:grid-cols-2 gap-3 p-3'
                : 'grid grid-cols-1 sm:grid-cols-3 gap-3 p-3'
          }`}
        >
          {videoData.map((video, idx) => (
            <a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden group/thumb ${
                videoData.length === 1 
                  ? 'w-full h-full' 
                  : 'aspect-[9/16] rounded-xl' 
              }`}
            >
              <iframe
                src={video.embedUrl}
                title={`${project.title} video ${idx + 1}`}
                className="w-full h-full absolute top-0 left-0 scale-[1.35]"
                allow="autoplay; encrypted-media; mute"
                frameBorder="0"
                style={{ pointerEvents: 'none' }}
              ></iframe>
              
              {/* Play button overlay that only appears on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/thumb:bg-black/30 transition-colors z-10">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 group-hover/thumb:scale-110 transition-all shadow-lg">
                  <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3">
            <Badge variant="secondary" className="text-xs font-mono mb-2">
              {project.date}
            </Badge>
            <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/5 text-primary/80 border border-primary/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}