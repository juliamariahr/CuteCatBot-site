import { PawPrint } from 'lucide-react';
import Link from 'next/link';

export function AppHeader() {
  return (
    <header className="py-4 md:py-6 bg-card shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <PawPrint className="h-7 w-7 sm:h-8 sm:w-8" />
          <span className="font-headline">CuteCatBot</span>
        </Link>
      </div>
    </header>
  );
}
