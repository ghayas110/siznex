'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ModalAudit from './ModalAudit';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
const RequestFreeAudit = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
       <section className="py-24 text-center bg-gradient-to-b from-[#1a1a1a] to-[#0b0b0b] border-t border-[#222]">
          <motion.h2 className="text-4xl font-bold mb-4" initial="hidden" whileInView="visible" variants={fadeUp}>
            Work Smarter with Professional Virtual Assistance
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-6"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            Let our experts manage your operations, communication, and ecommerce tasks while you focus on scaling your business.
          </motion.p>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-orange-300 text-black px-10 py-4 rounded-xl text-lg font-semibold hover:opacity-80 transition shadow-xl inline-block cursor-pointer"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            Request Free Audit
          </motion.button>

          {isModalOpen && <ModalAudit onClose={() => setIsModalOpen(false)} />}
        </section>
  )
};

export default RequestFreeAudit;
