'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import AppPageHeader from '@/components/organisms/AppPageHeader';
import AppPageContent from '@/components/organisms/AppPageContent';

// --- NOVO ---
// 1. Variante do container principal (orquestrador)
// Usamos o 'sectionVariants' que você tinha comentado.
// Ele vai "orquestrar" a entrada dos filhos um após o outro.
const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.3, // Cada filho animará com 0.3s de atraso
    },
  },
};

// --- NOVO ---
// 2. Variante para a imagem da esquerda ("zoio")
// Entra da esquerda e ganha escala (efeito de "empurrar" para a cena)
const zoioVariants: Variants = {
  hidden: { opacity: 0, x: -100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 80,
      damping: 20,
    },
  },
};

// --- NOVO ---
// 3. Variante para a imagem da direita ("phone")
// Entra da direita, com rotação e escala (similar ao que você tinha)
const phoneVariants: Variants = {
  hidden: { opacity: 0, x: 100, scale: 1.1, rotate: 5 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 90,
      damping: 20,
    },
  },
};

// --- NOVO ---
// 4. Variante para o bloco de conteúdo (Header + Content)
// Entra de baixo para cima, com fade-in
const contentVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

function AppPage() {
  return (
    <motion.main
      id={'app'}
      aria-label="Página do APP da Zcom"
      className={cn(
        'relative bg-gradient-to-l from-dark via-zcom-700 to-zcom-500 flex h-full w-full min-h-[80dvh] xl:h-[100dvh] justify-end overflow-hidden z-100', // Adicionado overflow-hidden
      )}
      initial="hidden"
      whileInView="visible"
      variants={pageVariants}
    >
      <motion.div
        className="hidden xl:flex absolute bottom-[-20dvh] left-[-26dvw]  h-full w-full z-0"
        aria-hidden="true"
        variants={zoioVariants}
      >
        <Image
          src="/images/app/zoio.webp"
          alt="Pessoa chamada Zoio "
          fill
          priority
          className="object-contain scale-155"
        />
      </motion.div>

      <motion.div
        className="w-full xl:w-[60%] flex flex-col h-full justify-around"
        variants={contentVariants}
      >
        <AppPageHeader />
        <AppPageContent />
      </motion.div>

      <motion.div
        className="flex absolute bottom-[-28dvh] md:bottom-[-18dvh] xl:bottom-[-14dvh] right-[-32dvw] xl:right-[-40dvw] 2xl:right-[-36dvw] h-full w-full z-20"
        aria-hidden="true"
        variants={phoneVariants} // <-- APLICADA VARIANTE "PHONE"
      >
        <Image
          src="/images/app/phone.webp"
          alt="Celular com o aplicativo ZCOM TV"
          fill
          priority
          className="object-contain scale-50 md:scale-75 xl:scale-70 2xl:scale-100"
        />
      </motion.div>
    </motion.main>
  );
}

export default AppPage;
