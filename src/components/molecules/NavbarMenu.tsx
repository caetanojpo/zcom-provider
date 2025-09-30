import { NAVBAR_COPYWRITING } from '@/data/copywriting/navbar.data';
import TextButton from '@/components/atoms/buttons/TextButton';

export default function NavbarMenu() {
  return (
    <nav className="hidden lg:flex items-center text-white/90">
      {NAVBAR_COPYWRITING.mainSection.map((e, idx) => (
        <div
          key={idx}
          className="flex items-center after:mx-4 after:h-5 after:w-px after:bg-dark/70
                 last:after:content-[''] last:after:w-0 last:after:h-0 last:after:m-0"
        >
          <TextButton
            href={e.link}
            target={'_self'}
            variant="body-md"
            className="hover:text-white text-white/90 transition-colors cursor-pointer"
          >
            {e.text}
          </TextButton>
        </div>
      ))}
    </nav>
  );
}
