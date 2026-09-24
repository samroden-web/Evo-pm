import Image from 'next/image';

// GLOBAL-09: real EVO photos only, captioned with the place in small grey type.
export default function Photo({ src, alt, caption, width, height, priority = false, sizes = '(min-width: 900px) 50vw, 100vw', style }) {
  return (
    <figure className="photo">
      <Image src={src} alt={alt} width={width} height={height} sizes={sizes} priority={priority} style={style} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
