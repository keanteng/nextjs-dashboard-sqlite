import {
  Button,
  Box,
  Text
} from '@chakra-ui/react';
import HomeLogo from './ui/home-logo';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Home | Nexus Engine',
};

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen p-6'>
      <Box className="flex h-20 items-end rounded-md p-4 bg-zinc-800 md:h-52">
        <HomeLogo />
      </Box>

      <Box className='flex flex-col mt-4 grow gap-4 md:flex-row'>
        <Box className='flex flex-col justify-center gap-6 rounded-lg bg-zinc-700 px-6 py-10 md:w-2/5 md:px-20'>
          <Text className='md:leading-normal md:text-3xl text-xl text-white'>
            <strong>Cloud First, Mobile First, Web First {' '}</strong>
            Inventory Management
          </Text>

          <Link
          href = "/login"
          className='flex flex-row items-center gap-5 self-start rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-300 md:text-base'
          >
            <span>Log In</span><ArrowLongRightIcon className='h-6 w-6' />
          </Link>
        </Box>

        <Box>
          <Image
            src = "/home/landing_image.jpg"
            width = {1000}
            height = {860}
            className='hidden md:block rounded-lg'
            alt="show on desktop"
          />

          <Image
            src = "/home/landing_image.jpg"
            width = {560}
            height = {620}
            className='block md:hidden rounded-lg'
            alt="show on mobile"
          />
        </Box>
      </Box>
    </main>
  );
}
