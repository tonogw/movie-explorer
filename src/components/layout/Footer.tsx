import { LucideTv } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[359px] md:max-w-[768px] lg:max-w-360 flex justify-between items-center  lg:px-35 py-10 bg-black text-[#FDFDFD]">
      <div className="flex items-center gap-2">
        <LucideTv size={32} />
        <span className="font-bold text-2xl lg:text-4xl">Movie</span>
      </div>
      <p className="text-right ">Copyright &copy; 2025 Movie Explorer</p>
    </footer>
  );
}
