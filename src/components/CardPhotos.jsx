// Photo area of a card. Two photos sit side by side, one photo fills the area, none shows a plain block.
export default function CardPhotos({ images = [] }) {
  const list = images.filter((i) => i && i.src)
  if (list.length === 0) return <div className="aspect-[4/3] bg-maroon-dark" />
  if (list.length === 1) {
    return <img src={list[0].src} alt={list[0].alt} className="block w-full aspect-[4/3] object-cover" />
  }
  return (
    <div className="grid grid-cols-5 gap-1 aspect-[4/3] bg-maroon-dark">
      {list.slice(0, 2).map((p, i) => (
        <img key={p.src} src={p.src} alt={p.alt} className={`h-full w-full object-cover ${i === 0 ? 'col-span-3' : 'col-span-2'}`} />
      ))}
    </div>
  )
}
