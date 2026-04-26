'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IMAGE_SRC } from '@/data/imageSrc.data';
import { NAVBAR_COPYWRITING } from '@/data/copywriting/navbar.data';
import NavbarMenu from '@/components/molecules/NavbarMenu';
import SocialIconButton from '@/components/atoms/buttons/SocialIconButton';
import TextButton from '@/components/atoms/buttons/TextButton';
import HamburgerButton from '@/components/atoms/buttons/HamburgerButton';
import MobileDrawer from '@/components/molecules/MobileDrawer';
import Link from 'next/link';
import IconTextButton from '../atoms/buttons/IconTextButton';
import { navbarLinks } from '@/data/navbar.links.data';
import { NAVBAR_LOGO_SIZE, IMAGE_QUALITY_FULL, LINK_TARGET_BLANK } from '@/constants/ui.constants';
import { SECTION_ID_HERO } from '@/constants/sections.constants';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="absolute z-[200] w-full px-8 py-4 md:py-3">
        <div
          className={` ${isMobileMenuOpen ? 'hidden' : 'flex'} items-center justify-between md:gap-6 px-8 md:py-3 py-4 rounded-full  bg-gradient-to-r from-zcom-700 to-zcom-500 shadow-xl border border-white/10`}
        >
          <div className="flex flex-[1] items-center justify-between md:gap-8 gap-4">
            <Link href={`/#${SECTION_ID_HERO}`} className="w-[100px] flex-shrink-0">
              <Image
                src={IMAGE_SRC.navBar.logo}
                alt={NAVBAR_COPYWRITING.logoAlt}
                width={NAVBAR_LOGO_SIZE}
                height={NAVBAR_LOGO_SIZE}
                priority
                quality={IMAGE_QUALITY_FULL}
                style={{ height: 'auto' }}
              />
            </Link>
            <NavbarMenu />
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-end gap-4">
            <TextButton
              href={NAVBAR_COPYWRITING.invoice.link}
              variant="body-xs"
              className="hidden xl:flex text-white/90 hover:text-white transition-colors text-center transition-transform hover:scale-105"
              target={LINK_TARGET_BLANK}
            >
              {NAVBAR_COPYWRITING.invoice.text}
            </TextButton>

            <div className="flex items-center gap-1">
              <IconTextButton
                name={NAVBAR_COPYWRITING.phone.name}
                target={NAVBAR_COPYWRITING.phone.target}
                icon={NAVBAR_COPYWRITING.phone.icon}
                link={NAVBAR_COPYWRITING.phone.link}
                text={NAVBAR_COPYWRITING.phone.text}
                variant="white"
                size="xs"
                textVariant="body-xs"
                textClassName="text-white"
                gap="xs"
              />
            </div>

            <div className="flex items-center">
              {navbarLinks.map((item, idx) => (
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
