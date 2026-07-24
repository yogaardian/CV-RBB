import { COMPANY } from "@/lib/site-data";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-150 hover:scale-110 hover:shadow-xl"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
