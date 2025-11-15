import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function HeaderActions({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <a href="https://mis.strongbridgeitsolutions.com/login">
        <div className="hidden md:block text-sm font-medium text-[#012d1f] hover:text-white px-2 py-1 rounded hover:bg-gray-900 transition">
          Log in
        </div>
      </a>
      <Button className="bg-gradient-to-r from-[#023021] to-[#012d1f] text-white hover:from-green-700 hover:to-green-600 shadow-md">
        Contact sales
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-gray-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
    </div>
  );
}
