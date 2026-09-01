import { wideoConfig } from "@/content/wideo";
import { VideoFacade } from "./VideoFacade";

/**
 * Server component. Renders the video step only when a Vimeo ID is configured.
 * Without it, production shows nothing here (the hero adapts its primary CTA),
 * and development shows an intentional placeholder so editors see the slot.
 * See docs/video-replacement-required.md.
 */
export async function VideoSection() {
  const { video } = wideoConfig;
  if (!video.vimeoId) {
    if (process.env.NODE_ENV !== "development") return null;
    return (
      <section id="wideo" className="section--tight" aria-label="Wideo">
        <div className="container">
          <div className="wl-video-head">
            <div className="eyebrow">{video.stepLabel}</div>
            <h2>{video.title}</h2>
          </div>
          <div className="wl-video-frame wl-video-frame--dev">
            <p>Slot na wideo — ustaw NEXT_PUBLIC_VIMEO_VIDEO_ID</p>
          </div>
        </div>
      </section>
    );
  }

  const thumbnailUrl = await fetchVimeoThumbnail(video.vimeoId);

  return (
    <section id="wideo" className="section--tight" aria-labelledby="wl-video-heading">
      <div className="container">
        <div className="wl-video-head">
          <div className="eyebrow">{video.stepLabel}</div>
          <h2 id="wl-video-heading">{video.title}</h2>
          <p>{video.note}</p>
        </div>
        <VideoFacade videoId={video.vimeoId} title={video.title} thumbnailUrl={thumbnailUrl} />
      </div>
    </section>
  );
}

async function fetchVimeoThumbnail(videoId: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(`https://vimeo.com/${videoId}`)}&width=1280`,
      { next: { revalidate: 86_400 } },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { thumbnail_url?: unknown };
    return typeof data.thumbnail_url === "string" ? data.thumbnail_url : null;
  } catch {
    return null;
  }
}
