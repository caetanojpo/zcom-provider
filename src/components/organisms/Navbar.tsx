'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IMAGE_SRC } from '@/data/imageSrc.data';
import { NAVBAR_COPYWRITING } from '@/data/copywriting/navbar.data';
import NavbarMenu from '@/components/molecules/NavbarMenu';
import { Typography } from '@/components/atoms/text/Typography';
import SocialIconButton from '@/components/atoms/buttons/SocialIconButton';
import WhatsAppIcon from '../../../public/icons/whatsapp.svg';
import { socialMediaLinks } from '@/data/links.data';
import TextButton from '@/components/atoms/buttons/TextButton';
import HamburgerButton from '@/components/atoms/buttons/HamburgerButton';
import MobileDrawer from '@/components/molecules/MobileDrawer';
import Link from 'next/link';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div
        className="
          relative
          top-6
          mx-auto
          w-[95%]
          rounded-full
          px-8 md:py-3 py-4
          bg-gradient-to-r from-zcom-dark to-zcom
          shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_6px_20px_rgba(0,0,0,.35)]
          border border-white/10
        "
      >
        <div className="flex items-center justify-between md:gap-6">
          <div className="flex flex-1 items-center md:gap-20 gap-4">
            <Link href="/" className="w-[100px] flex-shrink-0">
              <Image
                src={IMAGE_SRC.navBar.logo}
                alt={NAVBAR_COPYWRITING.logoAlt}
                width={100}
                height={100}
                priority
                quality={100}
              />
            </Link>
            <NavbarMenu />
          </div>

          <div className="hidden md:flex flex-1 items-center justify-end gap-4">
            <TextButton
              href={NAVBAR_COPYWRITING.invoice.link}
              variant="body-xs"
              className="text-white/90 hover:text-white transition-colors"
            >
              {NAVBAR_COPYWRITING.invoice.text}
            </TextButton>

            <div className="flex items-center gap-1">
              <SocialIconButton
                name="whatsapp"
                target="_blank"
                icon={WhatsAppIcon}
                link="https://wa.me/5518996660018"
                variant="white"
                size="xs"
              />
              <Typography variant="body-xs" className="text-white">
                (18) 99785-6960
              </Typography>
            </div>

            <div className="flex items-center">
              {socialMediaLinks.map((item, idx) => (
                <SocialIconButton
                  key={idx}
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
          <HamburgerButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>
      </div>
      <MobileDrawer isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
