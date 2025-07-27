'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import {
  FaSignInAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Navbar = ({ currentLang }: { currentLang: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const currentLocale = useMemo(() => pathname.split('/')[1] || 'en', [pathname]);
 

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);

  };

  // const switchLanguage = (newLang: string) => {
  //   const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`)
  //   router.push(newPath)
  // }


  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <Link href={`/${currentLocale}`} className="flex items-center gap-2">
        <Image src={"/10mslogo-svg.svg"} alt='logo' width={90} height={50} />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
        <li>
          <Link href={`/${currentLocale}/ielts`} className="flex items-center gap-2 hover:text-blue-600 transition">
            IELTS
          </Link>
        </li>

      </ul>

      {/* Right Side: Language + Login */}
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center space-x-2">
          <div className="flex rounded-md border border-gray-300 overflow-hidden">
            <button
              onClick={() => handleLocaleChange("en")}
              className={`rounded-none px-3 py-1 text-xs ${currentLang === "en" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
            >
              EN
            </button>
            <button
              onClick={() => handleLocaleChange("bn")}
              className={`rounded-none px-3 py-1 text-xs ${currentLang === "bn" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
            >
              বাং
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-700 text-xl focus:outline-none"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col px-6 py-4 space-y-4 z-40 md:hidden">
          <Link href={`/${currentLocale}/ielts`} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            IELTS
          </Link>

          <div className="flex items-center gap-2">

            <div className="flex rounded-md border border-gray-300 overflow-hidden">
              <button
                onClick={() => handleLocaleChange("en")}
                className={`rounded-none px-3 py-1 text-xs ${currentLang === "en" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => handleLocaleChange("bn")}
                className={`rounded-none px-3 py-1 text-xs ${currentLang === "bn" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
              >
                বাং
              </button>

            </div>
          </div>
          <Link
            href={`/${currentLocale}/login`}
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm transition"
          >
            <FaSignInAlt />
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
