import { Menu } from 'lucide-react';
// import { useState } from 'react';
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
  // const [open, setOpen] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Menu size={24} />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="bg-red-500 text-white">
        <SheetTitle>Menu</SheetTitle>

        <SheetDescription>Navigation menu</SheetDescription>

        <nav className="mt-10 flex flex-col gap-6 text-lg">
          <SheetClose asChild>
            <Link to="/">Home</Link>
          </SheetClose>

          <SheetClose asChild>
            <Link to="/favorites">Favorites</Link>
          </SheetClose>
        </nav>
      </SheetContent>

      {/* <button onClick={() => setOpen(true)} className="md:hidden">
        <Menu size={24} />
      </button>

      {open && (
        <div
          className="
                fixed
                inset-0
                z-50
                bg-black
                text-white
                p-6
                "
        >
          <div
            className="
                    mt-10 flex
                    flex-col gap-6
                    text-xl
                    "
          >
            <a href="#home">Home</a>
            <a href="#favorites">Favorites</a>
          </div>
        </div>
      )} */}
    </Sheet>
  );
}
