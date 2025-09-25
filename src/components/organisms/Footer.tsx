'use client';
import React, { useState } from 'react';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import Image from 'next/image';
import { Typography } from '@/components/atoms/text/Typography';
import Link from 'next/link';
import IconTextButton from '@/components/atoms/buttons/IconTextButton';
import WhatsAppIcon from '../../../public/icons/whatsapp.svg';
import { InstagramIcon, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
}

interface FooterNewsletterProps {
  onSubmit: (data: FormData) => void;
}

function FooterNewsletter({ onSubmit }: FooterNewsletterProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 xl:w-[50%] max-w-[700px]">
      <div className="flex flex-col gap-4 rounded-[50px] bg-gradient-to-r from-zcom-700 to-zcom-500 px-4 py-6 shadow-md md:flex-row md:rounded-[80px] md:px-10">
        <div className="flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="ZCOM Logo"
            width={100}
            height={100}
            className="object-contain md:w-[140px]"
          />
        </div>
        <div className="flex h-full w-full flex-col gap-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="DIGITE SEU NOME"
              className="w-full rounded-full border-0 bg-white px-3 py-2 text-sm italic tracking-wide text-gray-700 placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              aria-label="Seu nome"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="SEU EMAIL"
              className="w-full rounded-full border-0 bg-white px-3 py-2 text-sm italic tracking-wide text-gray-700 placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              aria-label="Seu email"
            />
          </div>
        </div>
      </div>
      <div className="z-30 flex w-full justify-center pt-4">
        <button
          type="submit"
          className="transform cursor-pointer rounded-full bg-zcom-200 px-8 py-2 text-lg italic tracking-wide text-white transition-all duration-200 hover:scale-105 hover:bg-zcom-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-zcom-500 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          CADASTRAR
        </button>
      </div>
    </form>
  );
}

function FooterLinks() {
  return (
    <div className={' flex flex-col h-full gap-2 md:gap-4 xl:gap-6'}>
      <Typography className="text-blue-600 xl:text-[20px]">ZCOM</Typography>
      <ul className="flex flex-col gap-4">
        <li className={'transition-transform hover:scale-105'}>
          <Link href="/contato">
            <Typography className={'xl:text-[18px]'}>CONTATO</Typography>
          </Link>
        </li>
        <li className={'transition-transform hover:scale-105'}>
          <Link href="/duvidas">
            <Typography className={'xl:text-[18px]'}>DÚVIDAS</Typography>
          </Link>
        </li>
        <li className={'transition-transform hover:scale-105'}>
          <Link href="/contratar">
            <Typography className={'xl:text-[18px]'}>COMO CONTRATAR</Typography>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function FooterContacts() {
  return (
    <div className={' flex flex-col h-full gap-1 md:gap-3 xl:gap-5'}>
      <Typography className="text-blue-600 xl:text-[20px]">CONTATO</Typography>
      <ul className="flex flex-col gap-3 ">
        <li>
          <IconTextButton
            link=""
            size="sm"
            gap="xs"
            icon={WhatsAppIcon}
            text="(18) 99785-6960"
            variant={'iconFooter'}
            textClassName={'xl:text-[18px]'}
            iconClassName={'xl:w-[30px] xl:h-[30px]'}
          />
        </li>
        <li>
          <IconTextButton
            link=""
            size="sm"
            gap="xs"
            icon={MapPin}
            text={`Rua Ângelo Pípolo, 666
									Cândido Mota/SP`}
            variant={'iconFooter'}
            className={'md:hidden'}
          />
          <IconTextButton
            link=""
            size="sm"
            gap="xs"
            icon={MapPin}
            text={`Rua Ângelo Pípolo, 666
									Cândido Mota/SP`}
            variant={'iconFooter'}
            whiteSpace={'whitespace-pre-line'}
            className={'hidden md:flex'}
            textClassName={'xl:text-[18px]'}
            iconClassName={'xl:w-[30px] xl:h-[30px]'}
          />
        </li>
        <li>
          <IconTextButton
            link=""
            size="sm"
            gap="xs"
            icon={InstagramIcon}
            text="@zcom.internet"
            variant={'iconFooter'}
            textClassName={'xl:text-[18px]'}
            iconClassName={'xl:w-[25px] xl:h-[25px]'}
          />
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  const handleNewsletterSubmit = (data: FormData) => {
    console.log('Newsletter submitted:', data);
  };

  return (
    <section className="relative flex h-full w-full bg-gradient-to-l from-zcom-700 to-zcom-500">
      <DarkOverlay />
      <div className="absolute bottom-[-80px] left-[-150px] h-full w-full bg-lines-footer bg-bottom bg-contain bg-no-repeat scale-150 md:bottom-[-280px] md:left-[-300px] xl:bottom-[-420px] xl:left-[-600px] xl:scale-125 2xl:left-[-750px] 2xl:bottom-[-430px]" />
      <div className="z-20 flex h-full w-full  flex-col xl:items-center p-6 xl:px-10">
        <FooterNewsletter onSubmit={handleNewsletterSubmit} />
        <div className="z-50 mt-10 xl:mt-16 mb-24  flex h-full w-full justify-center gap-[20px] md:gap-[80px] xl:gap-[150px]  italic text-white">
          <FooterLinks />
          <FooterContacts />
        </div>
      </div>
    </section>
  );
}

export default Footer;
