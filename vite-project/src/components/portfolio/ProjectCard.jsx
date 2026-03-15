import React from "react";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project }) {
  // Extract YouTube video ID and thumbnail from URL
  const getYouTubeData = (url) => {
    const match = url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    const id = match ? match[1] : null;
    return id ? {
      id,
      thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
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
        {/* Video thumbnails */}
        <div className={`relative ${videoData.length === 1 ? 'aspect-video' : 'grid grid-cols-1 gap-2 p-2'}`}>
          {videoData.map((video, idx) => (
            <a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block group/thumb ${videoData.length === 1 ? '' : 'aspect-video'}`}
            >
              <img
                src={video.thumbnail}
                alt={`${project.title} video ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/thumb:bg-black/30 transition-colors rounded-lg">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover/thumb:scale-110 transition-transform">
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