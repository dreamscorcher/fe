import { Linkedin, Facebook, Youtube, Mail } from "lucide-react";
import { Headphones } from "lucide-react";
import fsLogo from "@/assets/fs-logo.png";

const Footer = () => (
  <footer className="bg-gray-900 py-10 w-full">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex justify-between items-center flex-wrap gap-6">
        {/* Left */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src={fsLogo} alt="FS Immobilienbewertung" className="h-10 w-auto" />
          </div>
          <p className="text-gray-400 text-xs mb-3">Bewertet in Deutschland, Beraten in der ganzen Welt</p>
          <div className="flex gap-3">
            {[Linkedin, Facebook, Youtube, Mail].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-400 hover:text-white">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Center */}
        <div className="text-center">
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-white">Impressum</a>
            <span>·</span>
            <a href="#" className="hover:text-white">Datenschutz</a>
            <span>·</span>
            <a href="#" className="hover:text-white">Kontakt</a>
          </div>
        </div>

        {/* Right */}
        <div className="text-right">
          <div className="flex items-center gap-2 justify-end mb-1">
            <Headphones className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-sm">Jetzt anrufen</span>
          </div>
          <a href="tel:+4915888651952" className="text-green-400 font-semibold text-sm">
            +49 15888 651952
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 pt-4 mt-6 text-center">
        <p className="text-gray-500 text-xs">© 2024 FS Immobilienbewertung. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
