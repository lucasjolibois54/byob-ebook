"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "About",
    link: "/#about",
  },
  {
    id: 1,
    navTitle: "What you'll learn",
    link: "/#what-you-will-learn",
  },
  {
    id: 2,
    navTitle: "Reviews",
    link: "/#reviews",
  },
  {
    id: 3,
    navTitle: "FAQ",
    link: "/#faq",
  },
  {
    id: 4,
    navTitle: "contact",
    link: "/#contact",
  },
];
export default function MobileNav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // New state
  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className={`overflow-hidden fixed w-full bg-[#131313] block md:hidden z-40 text-white ${
        mobileNavOpen || isAnimating ? "h-screen" : "h-auto"
      }`}
    >
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className={`flex justify-between px-[45px] py-[35px]`}
      >
        <div className="overflow-y-hidden">
          <motion.h1 className="text-[15px] " variants={hideNavItemsVariant}>
            BecomeYourOwnBarber
          </motion.h1>
        </div>
        <div className="overflow-y-hidden">
          <motion.div
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
            className="uppercase text-[13px] hover:cursor-pointer "
          >
            Menu
          </motion.div>
        </div>
        <motion.div
          variants={mobileMenuVariant}
          className={`fixed top-0 left-0 h-screen w-full flex flex-col items-center bg-black z-40`}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
            className="self-end mr-[45px] mt-[35px] outline-none border-none bg-transparent uppercase text-[13px] text-white font-inherit hover:cursor-pointer"
          >
            Close
          </motion.button>
          <motion.ul variants={ulVariant} className="list-none mt-[40px]">
            {MOBILE_NAV_ITEMS.map((navItem) => (
              <motion.li
                whileTap={{ scale: 0.95 }}
                key={navItem.id}
                className="my-[20px] overflow-y-hidden select-none"
              >
                <Link
                  href={navItem.link}
                  onClick={() => setMobileNavOpen(false)}
                >
                  <motion.div
                    variants={liVariant}
                    className="text-center capitalize text-[34px] hover:italic hover:cursor-pointer"
                  >
                    {navItem.navTitle}
                  </motion.div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fadeInVariant} className="mt-[80px] flex">
            <h5 className="font-normal mr-[40px]">+852 5650 2233</h5>
            <h5 className="font-normal">hi@designagency.com</h5>
          </motion.div>
        </motion.div>
      </motion.nav>
    </div>
  );
}
