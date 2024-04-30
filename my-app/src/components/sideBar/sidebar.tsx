"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SideBarMenu } from "./constants";
import Image from "next/image";
import {
  XMarkIcon,
  Bars3Icon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import sideBarImage from "../../../public/images/sideBar.png";
import VerticleImage from "../../../public/images/verticleName.png";

const Sidebar = () => {
  ////////////////////////
  //       states       //
  ////////////////////////
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
                    <button type="button" onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-col pb-4 overflow-y-auto shadow-sm grow gap-y-5 bg-primary-main w-[345px]">
                  <div className="flex items-center h-16 gap-3 px-4 shrink-0 pl-5">
                    <div className="relative h-[221px] w-[330px] top-8">
                      <Image
                        src={sideBarImage}
                        alt="company_logo"
                        fill
                        priority
                      />
                    </div>
                  </div>
                  <nav className="flex flex-col flex-1">
                    <Link
                      className="flex gap-x-3 py-3 px-12 text-base leading-6 font-semibold text-text-main mt-16"
                      href="/"
                      onClick={() => setSidebarOpen(false)}
                    >
                      HOME
                    </Link>
                    <ul role="list" className="flex flex-col flex-1 gap-y-7">
                      <li>
                        <ul role="list">
                          {SideBarMenu?.map((item) => {
                            return (
                              <Link
                                key={item.name}
                                className="flex gap-x-3 py-3 px-12 text-base leading-6 font-semibold text-white"
                                href="/"
                                onClick={() => setSidebarOpen(false)}
                              >
                                {item.name}
                              </Link>
                            );
                          })}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <div>
                    <h1 className="text-xs text-white px-12 border-b-2 py-4">
                      TEXT SUPPORT 24/7{" "}
                      <span className="text-text-main ml-3 underline">
                        {" "}
                        070-7782-9137
                      </span>
                    </h1>
                    <div className="flex justify-between px-12 py-4 text-white">
                      <div className="flex justify-between items-center gap-2">
                        <ShoppingBagIcon
                          className="w-5 h-5 text-white"
                          aria-hidden="true"
                        />
                        <h1>WISHLIST</h1>
                      </div>
                      <div className="flex justify-between items-center gap-2">
                        <HeartIcon
                          className="w-5 h-5 text-white"
                          aria-hidden="true"
                        />
                        <h1>WISHLIST</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div
        className={`${
          sidebarOpen ? "hidden" : "block"
        } flex flex-col bg-primary-main border-r-8 border-text-main h-screen w-[150px] fixed justify-between items-center pt-6 z-[1000]`}
      >
        <button
          type="button"
          className="z-50 text-lg text-gray-700 top-3 left-1"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="w-10 h-10 text-white" aria-hidden="true" />
        </button>
        <div className="top-3 left-3 mb-[200%] pl-5">
          <Image src={VerticleImage} alt="logo" width={1900} height={1300} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
