import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Link } from 'react-router-dom';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </SheetTrigger>

      <SheetContent side="right" className="">
        <SheetTitle className="sr-only">Menu</SheetTitle>

        <SheetDescription className="sr-only">Navigation menu</SheetDescription>

        {/* MENU */}
        <nav className="mt-10 flex flex-col gap-6 text-lg">
          <SheetClose asChild>
            <Link to="/">Home</Link>
          </SheetClose>

          <SheetClose asChild>
            <Link to="/favorites">Favorites</Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
