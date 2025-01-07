"use client";

import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { ThemeButton } from "@/components/theme-button";
import Banner from "./Banner";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(20);

    setTimeout(() => {
      setProgress(40);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 400);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 50);
  }, []);

  return (
    <nav className="relative bg-card text-card-foreground shadow-md z-50">
      <LoadingBar
        color="#00ff00"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Banner />
      <div className="container mx-auto py-4 px-4 md:px-8">
        <div className="flex justify-between items-center md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-muted-foreground w-6 h-6"
            aria-label="Menu Toggle"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="text-2xl font-bold">
            <span>Shane</span> Libaas
          </div>
          <div className="flex items-center space-x-4">
            <FaShoppingCart className="text-muted-foreground w-5 h-5 cursor-pointer hover:text-primary" />
            <FaUser className="text-muted-foreground w-5 h-5 cursor-pointer hover:text-primary" />
            <ThemeButton />
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between">
          <div className="text-2xl font-bold text-left">
            <span>Shane</span> Libaas
          </div>
          <ul className="flex items-center space-x-8 text-sm justify-center">
            <li>
              <Link href="/" className="hover:text-primary">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/sale" className="hover:text-primary">
                On Sale
              </Link>
            </li>
            <li>
              <Link href="/new" className="hover:text-primary">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="/brands" className="hover:text-primary">
                Brands
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="hidden md:block pl-4 pr-10 py-2 rounded-full bg-muted text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-muted-foreground hidden md:block" />
            </div>
            <FaShoppingCart className="text-muted-foreground w-5 h-5 cursor-pointer hover:text-primary" />
            <FaUser className="text-muted-foreground w-5 h-5 cursor-pointer hover:text-primary" />
            <ThemeButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
