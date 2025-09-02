'use client';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        relative w-8 h-8 flex flex-col justify-center items-center
        md:hidden
        p-1 rounded-md hover:bg-white/10 transition-colors
      "
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
    >
      <span
        className={`
          block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out
          ${isOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'}
        `}
      />
      <span
        className={`
          block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out my-1
          ${isOpen ? 'opacity-0' : 'opacity-100'}
        `}
      />
      <span
        className={`
          block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out
          ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'}
        `}
      />
    </button>
  );
}
