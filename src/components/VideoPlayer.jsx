// Plays either a YouTube video ("youtube": full link or the 11-character ID)
// or a video file kept in public/videos ("src": '/videos/name.mp4').
function youtubeId(input = '') {
  const m = input.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([A-Za-z0-9_-]{11})/)
  if (m) return m[1]
  return /^[A-Za-z0-9_-]{11}$/.test(input) ? input : ''
}

export default function VideoPlayer({ title, youtube, src, poster }) {
  const id = youtubeId(youtube)
  return (
    <figure>
      <div className="gold-frame rounded-lg overflow-hidden bg-black aspect-video">
        {id ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title={title}
            loading="lazy"
            allow="accelerometer; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video className="w-full h-full" src={src} poster={poster} controls preload="metadata" playsInline>
            Your browser cannot play this video.
          </video>
        )}
      </div>
      {title && <figcaption className="mt-4 text-center text-sm font-medium text-maroon">{title}</figcaption>}
    </figure>
  )
}
