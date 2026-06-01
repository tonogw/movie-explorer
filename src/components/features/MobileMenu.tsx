import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="md:hidden">
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
      )}
    </>
  );
}
