import Image from 'next/image';

// Brief 6.6: four-step strip using the phone screens from the resident guide.
const steps = [
  { n: 1, title: 'Report', text: 'Choose the problem and add a photo.', img: '/images/guides/living-app-step-3.webp', alt: 'EVO Living App screen describing a problem with a photo attached' },
  { n: 2, title: 'Book', text: 'Pick the time slots that suit you.', img: '/images/guides/living-app-step-5.webp', alt: 'EVO Living App screen for choosing appointment time slots' },
  { n: 3, title: 'Track', text: 'See who is coming and when they will arrive.', img: '/images/guides/living-app-step-8.webp', alt: 'EVO Living App map showing the tradesperson on the way' },
  { n: 4, title: 'Rate', text: 'Tell us how it went.', img: '/images/guides/living-app-step-4.webp', alt: 'EVO Living App screen with a thumbs-up and the job reference number' },
];

export default function PhoneStepStrip() {
  return (
    <ol className="phone-steps">
      {steps.map((s) => (
        <li key={s.n}>
          <Image src={s.img} alt={s.alt} width={420} height={870} sizes="180px" />
          <h3>
            <span className="n">{s.n}</span>
            {s.title}
          </h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
