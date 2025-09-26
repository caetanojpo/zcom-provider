'use client';

import { motion, Variants } from 'framer-motion';
import React, { useState } from 'react';
import DarkOverlay from '@/components/atoms/backgrounds/DarkOverlay';
import Image from 'next/image';
import { Typography } from '@/components/atoms/text/Typography';
import Link from 'next/link';
import IconTextButton from '@/components/atoms/buttons/IconTextButton';
import WhatsAppIcon from '../../../public/icons/whatsapp.svg';
import { InstagramIcon, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
}

interface FooterNewsletterProps {
  onSubmit: (data: FormData) => void;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const backgroundVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05, x: '-10%', y: '-10%' }, // From top-left corner
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const newsletterVariants: Variants = {
  hidden: { opacity: 0, y: 100, x: -50 }, // From bottom-left corner
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const inputVariants: Variants = {
  hidden: { opacity: 0, y: 50 }, // From bottom
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 50 }, // From bottom
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const linksVariants: Variants = {
  hidden: { opacity: 0, y: 100, x: -50 }, // From bottom-left corner
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const linkItemVariants: Variants = {
  hidden: { opacity: 0, x: -50 }, // From left
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const contactsVariants: Variants = {
  hidden: { opacity: 0, y: 100, x: 50 }, // From bottom-right corner
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

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
    <motion.form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[700px] flex-col gap-4 xl:w-[50%]"
      variants={newsletterVariants}
    >
      <motion.div
        className="flex flex-col gap-4 rounded-[50px] bg-gradient-to-r from-zcom-700 to-zcom-500 px-4 py-6 shadow-md md:flex-row md:rounded-[80px] md:px-10"
        variants={newsletterVariants}
      >
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
          <motion.div className="relative" variants={inputVariants}>
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
          </motion.div>
          <motion.div className="relative" variants={inputVariants}>
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
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="z-30 flex w-full justify-center pt-4" variants={buttonVariants}>
        <button
          type="submit"
          className="transform cursor-pointer rounded-full bg-zcom-200 px-8 py-2 text-lg italic tracking-wide text-white transition-all duration-200 hover:scale-105 hover:bg-zcom-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-zcom-500 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          CADASTRAR
        </button>
      </motion.div>
    </motion.form>
  );
}

function FooterLinks() {
  return (
    <motion.div className="flex h-full flex-col gap-2 md:gap-4 xl:gap-6" variants={linksVariants}>
      <Typography className="text-blue-600 xl:text-[20px]">ZCOM</Typography>
      <ul className="flex flex-col gap-4">
        <motion.li className="transition-transform hover:scale-105" variants={linkItemVariants}>
          <Link href="/contato">
            <Typography className="xl:text-[18px]">CONTATO</Typography>
          </Link>
        </motion.li>
        <motion.li className="transition-transform hover:scale-105" variants={linkItemVariants}>
          <Link href="/duvidas">
            <Typography className="xl:text-[18px]">DÚVIDAS</Typography>
          </Link>
        </motion.li>
        <motion.li className="transition-transform hover:scale-105" variants={linkItemVariants}>
          <Link href="/contratar">
            <Typography className="xl:text-[18px]">COMO CONTRATAR</Typography>
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  );
}

function FooterContacts() {
  return (
    <motion.div
      className="flex h-full flex-col gap-1 md:gap-3 xl:gap-5"
      variants={contactsVariants}
    >
      <Typography className="text-blue-600 xl:text-[20px]">CONTATO</Typography>
      <ul className="flex flex-col gap-3">
        <motion.li variants={linkItemVariants}>
          <IconTextButton
            link=""
            size="sm"
            gap="xs"
            icon={WhatsAppIcon}
            text="(18) 99785-6960"
            variant="iconFooter"
            textClassName="xl:text-[18px]"
            iconClassName="xl:w-[30px] xl:h-[30px]"
          />
        </motion.li>
        <motion.li variants={linkItemVariants}>
          <IconTextButton
            link=""
            size="sm"
            gap="xs"
            icon={MapPin}
            text="Rua Ângelo Pípolo, 666\nCândido Mota/SP"
            variant="iconFooter"
            className="md:hidden"
          />
          <IconTextButton
            link=""
            size="sm"
            gap="xs"
            icon={MapPin}
            text="Rua Ângelo Pípolo, 666\nCândido Mota/SP"
            variant="iconFooter"
            whiteSpace="whitespace-pre-line"
            className="hidden md:flex"
            textClassName="xl:text-[18px]"
            iconClassName="xl:w-[30px] xl:h-[30px]"
          />
        </motion.li>
        <motion.li variants={linkItemVariants}>
          <IconTextButton
            link=""
            size="sm"
            gap="xs"
            icon={InstagramIcon}
            text="@zcom.internet"
            variant="iconFooter"
            textClassName="xl:text-[18px]"
            iconClassName="xl:w-[25px] xl:h-[25px]"
          />
        </motion.li>
      </ul>
    </motion.div>
  );
}

function Footer() {
  const handleNewsletterSubmit = (data: FormData) => {
    console.log('Newsletter submitted:', data);
  };

  return (
    <motion.section
      className={cn('relative flex h-full w-full bg-gradient-to-r from-dark to-zcom-500')}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some' }}
    >
      <DarkOverlay />
      <motion.div
        className="absolute bottom-[-80px] left-[-150px] h-full w-full scale-150 bg-lines-footer bg-bottom bg-contain bg-no-repeat md:bottom-[-280px] md:left-[-300px] lg:bottom-[-420px] lg:left-[-600px] lg:scale-125 2xl:bottom-[-430px] 2xl:left-[-750px]"
        variants={backgroundVariants}
        viewport={{ once: true, amount: 0.3 }}
      />
      <div className="z-20 flex h-full w-full flex-col p-6 lg:items-center xl:px-10">
        <FooterNewsletter onSubmit={handleNewsletterSubmit} />
        <motion.div
          className="z-50 mb-24 mt-10 flex h-full w-full justify-center gap-[20px] italic text-white md:gap-[80px] xl:mt-16 xl:gap-[150px]"
          variants={linksVariants}
        >
          <FooterLinks />
          <FooterContacts />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Footer;
