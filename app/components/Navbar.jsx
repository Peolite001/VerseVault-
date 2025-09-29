"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { data: session } = useSession();
  console.log(session);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "FAQs", url: "/faqs" },
    { label: "Explore", url: "/explore" },
  ];

  return (
    <nav className="shadow-md md:px-8 px-2 py-3 flex items-center justify-between">
      <Link href={"/"} className="flex items-center gap-1 z-40">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={800}
          height={800}
          className="w-10 h-10"
        />
        <p className="text-lg text-gray-800 max-md:hidden">VerseVault</p>
      </Link>

      {/* Desktop view */}
      <div className="lg:flex items-center gap-6 hidden">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="text-gray-800 hover:text-purple-600 transition-all duration-150 text-lg"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* mobile and tab view */}
      <div
        className={`lg:hidden bg-white h-dvh w-full top-0 left-0 absolute flex flex-col items-center gap-10 pt-20 ${navOpen ? "opacity-100" : "opacity-0"
          }`}
      >
        {navItems.map((item, index) => (
          <Link
            onClick={() => setNavOpen(false)}
            key={index}
            href={item.url}
            className="text-gray-800 hover:text-purple-600 transition-all duration-150 text-lg"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {session ? (
        <div className="ml-auto lg:ml-0">
          <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img
              src={session?.user?.image}
              alt={session?.user?.name ? String(session.user.name).slice(0, 2).toUpperCase() : "User"}
              className="w-10 h-10 rounded-full"
            />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link href={"/profile"}>My Profile</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href={"/new-post"}>New Post</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <button onClick={() => signOut()}>Sign Out</button>
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <Link
          href={"/auth/signin"}
          className="flex items-center gap-1 text-lg hover:text-purple-600 transition-all duration-150 max-lg:ml-auto z-40"
        >
          <p className="max-md:hidden">Sign In</p>
          <FaRegUser />
        </Link>
      )}

      <button
        onClick={() => setNavOpen(!navOpen)}
        className="lg:hidden text-2xl ml-4 z-40"
      >
        {navOpen ? <IoCloseOutline /> : <RiMenu3Line />}
      </button>
    </nav>
  );
};

export default Navbar;