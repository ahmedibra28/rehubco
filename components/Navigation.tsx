'use client'

import React, { Fragment } from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { FaBars } from 'react-icons/fa'

import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className='border border-x-0 border-t-0'>
      <div className='container flex min-h-20 flex-row items-center justify-between'>
        <Image
          className='h-16 w-auto'
          width={60}
          height={60}
          alt='Rehubco logo'
          src='/logo.png'
          quality={100}
        />

        <Fragment>
          {/* for mobile and tab */}
          <div className='lg:hidden'>
            <DropdownMenu>
              <DropdownMenuTrigger className='text-2xl focus:hidden'>
                <FaBars className='text-primary' />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href='/' legacyBehavior passHref>
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href='/about-us' legacyBehavior passHref>
                    About Us
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Service</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Link href='/service' legacyBehavior passHref>
                          Service
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href='/service' legacyBehavior passHref>
                          Service
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>

                <DropdownMenuItem>
                  <Link href='/projects' legacyBehavior passHref>
                    Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href='/contact' legacyBehavior passHref>
                    Contact
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* for large screen */}
          <div className='hidden flex-row lg:flex'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href='/' legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href='/about-us' legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent className='justify-end'>
                    <ul className='grid w-44 grid-cols-1 gap-3 p-3 text-sm'>
                      <Link href='/' legacyBehavior passHref>
                        <NavigationMenuLink>Home</NavigationMenuLink>
                      </Link>
                      <Link href='/' legacyBehavior passHref>
                        <NavigationMenuLink>Home</NavigationMenuLink>
                      </Link>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href='/projects' legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href='/contact' legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </Fragment>
      </div>
    </nav>
  )
}
