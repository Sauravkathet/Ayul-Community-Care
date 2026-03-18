import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl">
                <img 
                  src={`${import.meta.env.BASE_URL}images/logo.png`} 
                  alt="Ayul Logo" 
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="font-display font-bold text-xl">Ayul Care</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-sm">
              Empowering individuals with disabilities to lead fulfilling, independent lives through personalized and compassionate support.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>NDIS Support Services</li>
              <li>Personal Care Assistance</li>
              <li>Community Participation</li>
              <li>Supported Independent Living</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4 text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary shrink-0 mt-1" />
                <span>Sydney, NSW<br/>Australia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-secondary shrink-0" />
                <a href="tel:+61450602904" className="hover:text-white transition-colors">+61 450 602 904</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-secondary shrink-0" />
                <a href="mailto:admin@ayulcommunitycare.com.au" className="hover:text-white transition-colors break-all">admin@ayulcommunitycare.com.au</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Ayul Community Care. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-accent" /> in Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
