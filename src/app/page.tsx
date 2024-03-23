'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen justify-between bg-white">
      <nav className="fixed z-50 flex h-[3.5rem] w-full items-center border-b border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
          <ul className="flex w-1/3 items-center gap-6 pl-10 text-sm font-medium text-zinc-950">
            <li>Home</li>
            <li>About Us</li>
            <li>Join Us</li>
          </ul>

          <div className="flex w-1/3 items-center justify-center">
            <div className="relative h-[48px]  w-[48px]">
              <Image src={'/nike.svg'} fill alt={'logo'} />
            </div>
          </div>
          <div className="flex w-1/3 items-center justify-end pr-10">
            <Button className="bg-transparent text-black">
              Join the crowd
            </Button>
          </div>
        </div>
      </nav>

      <div className="mx-auto flex min-h-screen w-full items-center justify-center">
        <motion.div
          initial={{ width: 600, height: 400, translateY: -50 }}
          animate={{ width: '100%', height: '100%', translateY: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="overflow-hidden "
        >
          <div className="flex w-full items-center justify-center">
            <div className="h-full w-full">
              <motion.video
                width="100%"
                height="100%"
                className="object-cover"
                controls={false}
                muted
                autoPlay
              >
                <source src="/running.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, translateY: -172 }}
              className="absolute flex h-[300px] w-full flex-col items-center justify-center overflow-hidden px-1"
            >
              <motion.h2
                initial={{ opacity: 0, translateY: 2000 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                className="text-[192px] font-bold tracking-tighter text-white"
              >
                RUN CLUB
              </motion.h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, translateY: 200 }}
              className="absolute flex h-[300px] w-full max-w-[872px] flex-col items-start justify-center overflow-hidden  px-1"
            >
              <motion.p
                initial={{ opacity: 0, translateY: 2000 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                className="max-w-md text-start text-lg text-white"
              >
                {
                  'Our run club transcends mere exercise, becoming a nostalgic journey through time. Vibrant runner outfits evoke bygone eras, transforming each run into a tribute to days gone by.'
                }
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
