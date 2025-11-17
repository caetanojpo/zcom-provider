'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_SRC } from '@/data/imageSrc.data';
import { NAVBAR_COPYWRITING } from '@/data/copywriting/navbar.data';
import { Typography } from '@/components/atoms/text/Typography';
import SocialIconButton from '@/components/atoms/buttons/SocialIconButton';
import IconTextButton from '@/components/atoms/buttons/IconTextButton';
import { COMERCIAL_WHATSAPP_LINK, socialMediaLinks } from '@/data/links.data';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`
          fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={onClose}
      />
      <div
        className={`
          fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50
          bg-gradient-to-b from-zcom-700 to-zcom-500
          shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Link href="/#hero" onClick={onClose}>
            <Image
              src={IMAGE_SRC.navBar.logo}
              alt={NAVBAR_COPYWRITING.logoAlt}
              width={80}
              height={80}
              priority
              quality={100}
            />
          </Link>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Fechar menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-4">
          {NAVBAR_COPYWRITING.mainSection.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              onClick={onClose}
              className="py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
              target={'_blank'}
            >
              <Typography variant="body-lg" className="text-white">
                {item.text}
              </Typography>
            </Link>
          ))}
          <Link
            href={NAVBAR_COPYWRITING.invoice.link}
            onClick={onClose}
            className="py-3 px-4 rounded-lg hover:bg-white/10 transition-colors border-t border-white/10 mt-4 pt-6"
          >
            <Typography variant="body-md" className="text-white/90">
              {NAVBAR_COPYWRITING.invoice.text}
            </Typography>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <IconTextButton
            name={NAVBAR_COPYWRITING.phone.name}
            target={NAVBAR_COPYWRITING.phone.target}
            icon={NAVBAR_COPYWRITING.phone.icon}
            link={NAVBAR_COPYWRITING.phone.link}
            text={NAVBAR_COPYWRITING.phone.text}
            variant="white"
            size="sm"
            textVariant="body-sm"
            textClassName="text-white"
            gap="xs"
            className="mb-4"
          />

          <div className="flex items-center gap-2">
            <Typography variant="body-xs" className="text-white/70 mr-2">
              Siga-nos:
            </Typography>
            {socialMediaLinks
              .filter(({ link }) => link !== COMERCIAL_WHATSAPP_LINK)
              .map((item) => (
                <SocialIconButton
                  key={item.link}
                  name={item.title}
                  target={item.target}
                  icon={item.icon}
                  link={item.link}
                  variant="white"
                  size="sm"
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
