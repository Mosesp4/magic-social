import { Logo } from "@/components/logo";
import Link from "next/link";
import type { FC } from "react";

const AppFooter: FC = () => {
  return (
    <footer className="w-full text-center bg-gray-50 border-t border-gray-200 py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <Logo />
        <nav className="flex gap-6 mt-4 sm:mt-0">
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition">About</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition">Privacy Policy</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition">Licensing</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition">Contact</Link>
        </nav>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Magic Social AI. All rights reserved.
      </div>
    </footer>
  );
};

export default AppFooter;
