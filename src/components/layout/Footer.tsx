import { LucideTv } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-[393px] md:max-w-[768px] lg:max-w-360 flex flex-col justify-between items-left px-4 lg:px-35 py-10 bg-black text-[#FDFDFD]">
        {/* LOGO */}
        <div className="flex  items-center gap-2">
          <LucideTv size={32} />
          <span className="font-bold text-2xl lg:text-4xl">Movie</span>
        </div>

        <div className="w-full"></div>
        <p className="text-left text-sm text-[#535862]">Copyright &copy; 2025 Movie Explorer</p>
      </div>
    </footer>
  );
}
