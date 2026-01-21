import { useEffect } from "react";
import { Loader2 } from "lucide-react";

interface RedirectProps {
  href: string;
}

export default function Redirect({ href }: RedirectProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace(href);
    }, 1000);

    return () => clearTimeout(timer);
  }, [href]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#EFF0EF]">
      <Loader2 className="h-8 w-8 animate-spin text-[#2D2A32]" />

      <p className="mt-6 text-lg text-[#2D2A32]">
        Redirecting to <span className="font-semibold">{href}</span>...
      </p>
    </div>
  );
}
