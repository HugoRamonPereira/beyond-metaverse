'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const date = new Date();
const year = date.getFullYear();

const Footer = () => (

  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4
          className="font-bold md:text-[64px] text-[44px] text-white"
        >
          Enter the Metaverse
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span
            className="font-light text-[16px] text-white"
          >
            ENTER METAVERSE
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4
            className="font-bold text-[24px] text-white"
          >
            Metaversus
          </h4>
          <p className="font-light text-[14px] text-white opacity-50">
            Copyright &#169; {year} Metaversus. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <Link href={social.destination} target="_blank">
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
