"use client"
import React from "react";
import Image from 'next/image'
import { motion, useScroll, useTransform,  useSpring } from "framer-motion";
export default function Hero() {

  const { scrollYProgress } = useScroll();
  // Scale the hero image
  const rawScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.56]);
  const scale = useSpring(rawScale, {
    stiffness: 80,
    damping: 20,
  });

  // Fade out the text
  const opacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);

    // Fade out the dark overlay
    const rawOverlayOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const overlayOpacity = useSpring(rawOverlayOpacity, {
      stiffness: 60,
      damping: 20,
    });

    

// Downward motion
const rawTranslateYDown = useTransform(scrollYProgress, [0, 1], [0, 100]); // Downward animation
const translateYDown = useSpring(rawTranslateYDown, {
  stiffness: 60,
  damping: 20,
});

// Upward motion
const rawTranslateYUp = useTransform(scrollYProgress, [0, 1], [100, 0]); // Upward animation
const translateYUp = useSpring(rawTranslateYUp, {
  stiffness: 60,
  damping: 20,
});


      const stylesright: React.CSSProperties = {
        willChange: 'transform',
        transform: 'translate3d(0px, 14.0982%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        transformStyle: 'preserve-3d' as 'preserve-3d',
      };

      const stylesmiddlebottom: React.CSSProperties = {
        translate: 'none',
        rotate: 'none',
        scale: 'none',
        transform: 'translateY(-2.27374e-14px)',
      };
      
  return (
    <section className='relative w-full text-white pointer-events-none'>
        {/* Dark overlay that fades out */}
     
        <div className='z-[5] bg-transparent absolute h-full inset-x-0 bottom-auto left-0'>
            <motion.div style={{ opacity }} transition={{ duration: 0.5 }} className='flex z-[3] w-full absolute justify-center items-start h-full inset-x-0 inset-y-0'>
                <div className='flex flex-col flex-nowrap justify-center items-center w-full h-[100vh] sticky top-0'>
                    <div className='text-center max-w-[50em] top-[50px] relative'>
                        <h1 className='text-7xl'>Become Your Own Barber</h1>
                    </div>
                 </div>
        
            </motion.div>
        </div>

        <div className='flex flex-col items-center justify-start w-full h-[170vh] relative top-auto'>
            
            <div className='flex justify-center overflow-hidden bg-transparent z-[2] items-center h-[100vh] w-full sticky top-0 '>
                <div className='z-[2] justify-center w-full h-full flex absolute overflow-hidden'>
                <motion.div
        className="absolute inset-0 z-[4] bg-black pointer-events-none"
        style={{ opacity: overlayOpacity }} transition={{ duration: 0.5 }}
      />
                    {/*right side images*/}
                    <div className='left-[-27%] flex flex-col absolute w-[46%] h-full justify-center gap-[3.13em]' > 
                        <div className=' flex flex-col relative top-0 w-full h-full justify-center gap-[3.13em]'>
                            <motion.div className='h-[50%] flex-none w-full' style={{ translateY: translateYDown }}>
                                <Image src={"https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c21_grav-4FOQ-3P6Up0-unsplash.webp"} alt='' height={1000} width={1000} className='object-cover w-full h-full'/>
                            </motion.div>
                            <motion.div className='h-[70%] flex-none w-full' style={{ translateY: translateYDown }}>
                                <Image src={"https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c21_grav-4FOQ-3P6Up0-unsplash.webp"} alt='' height={1000} width={1000} className='object-cover w-full h-full'/>
                            </motion.div>
                        </div>
                    </div>

                     {/*right side images*/}
                     <div className='right-[-27%] flex flex-col absolute w-[46%] h-full justify-center gap-[3.13em]' > 
                        <div className=' flex flex-col relative top-0 w-full h-full justify-center gap-[3.13em]'>
                            <motion.div className='h-[80%] flex-none w-full' style={{ translateY: translateYUp }}>
                                <Image src={"https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c21_grav-4FOQ-3P6Up0-unsplash.webp"} alt='' height={1000} width={1000} className='object-cover w-full h-full'/>
                            </motion.div >
                            <motion.div className='h-[60%] flex-none w-full' style={{ translateY: translateYUp }}>
                                <Image src={"https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c21_grav-4FOQ-3P6Up0-unsplash.webp"} alt='' height={1000} width={1000} className='object-cover w-full h-full'/>
                            </motion.div>
                        </div>
                    </div>
                </div>
                    {/*middle plus hero images*/}
                <div className='gap-[3em] flex flex-col justify-center items-center w-full h-full'>
                    <div className='z-[1] flex-none w-[56%] h-[30%]'>
                    <Image src={"https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c21_grav-4FOQ-3P6Up0-unsplash.webp"} alt='' height={1000} width={1000} className='object-cover w-full h-full'/>
                    </div>
                    {/*hero image*/}
                    <div className='z-[2] flex-none justify-center items-center w-full h-full flex absolute transform translate-x-0 translate-y-0'>
                        <motion.div className='w-full h-full relative overflow-hidden' style={{ scale }}>
                        <Image
                            src={"https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4df3295094b4aa22edf0b_21.avif"}
                            alt=""
                            sizes="100vw"
                            layout="fill" 
                            priority={false} // Change to true if you want eager loading
                            className="object-cover w-full h-full"
                            />
                        </motion.div>
                    </div>
                    <div className='flex-none w-[56%] h-[56%]'></div>
                    {/*bottom middle image*/}
                    <div className='z-[1] flex-none w-[56%] h-[30%] relative overflow-hidden' >
                        <motion.div className='flex items-center justify-center w-full h-full overflow-hidden' style={{ translateY: translateYDown }}>
                        <Image src={"https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c21_grav-4FOQ-3P6Up0-unsplash.webp"} alt='' height={1000} width={1000} className='object-cover w-full h-full'/>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
  
    </section>
  )
}
