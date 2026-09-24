import Image from 'next/image';

// A laptop drawn in CSS with a screenshot inside, so the device is always complete and
// sharp at any size. To update the screen, replace /public/images/app/evo-dashboard-screen.webp
// with a new 16:10 screenshot (ideally 1600 x 1000 or larger) and update width/height below.
export default function Laptop({
  src = '/images/app/evo-dashboard-screen.webp',
  alt = 'The EVO Dashboard showing a property record with details, location map and property attributes',
  width = 810,
  height = 506,
  priority = false,
  sizes = '(min-width: 960px) 480px, 80vw',
  className = '',
}) {
  return (
    <div className={`laptop ${className}`}>
      <div className="laptop__lid">
        <span className="laptop__camera" aria-hidden="true" />
        <div className="laptop__screen">
          <Image src={src} alt={alt} width={width} height={height} priority={priority} sizes={sizes} />
        </div>
      </div>
      <div className="laptop__base" aria-hidden="true" />
    </div>
  );
}
