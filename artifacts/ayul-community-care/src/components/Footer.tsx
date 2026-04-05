import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Heart } from "lucide-react";

const links = {
  services: [
    { label: "NDIS Support Services", href: "/services" },
    { label: "Personal Care", href: "/services" },
    { label: "Community Participation", href: "/services" },
    { label: "Daily Living Support", href: "/services" },
    { label: "Disability Support", href: "/services" },
    { label: "Supported Independent Living", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Mission & Values", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Media", href: "#" },
    { label: "Contact Us", href: "/contact" },
  ],
  support: [
    { label: "NDIS Information", href: "#" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Make a Referral", href: "/contact" },
    { label: "Emergency Contact", href: "tel:1800233673" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#E8DED1" }} className="text-[#4a4a4a]">

      {/* Top CTA strip */}
      <div className="border-b border-[#d8cdbd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-display font-bold text-[#2F2F2F] mb-1">
                Ready to get the support you deserve?
              </h3>
              <p className="text-[#5a5a5a] text-sm">Our team is available 24/7 — reach out today.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#8E6BBF] hover:bg-[#7d5cad] text-white font-semibold rounded-full transition-colors text-sm"
              >
                Get in Touch
              </Link>
              <a
                href="tel:1800233673"
                className="px-6 py-3 border font-medium rounded-full transition-colors text-sm text-[#2F2F2F]"
                style={{ borderColor: "#A8C3A0", backgroundColor: "#A8C3A0" }}
              >
                1800 233 673
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <img
                src={`${import.meta.env.BASE_URL}ayullogo.png`}
                alt="AT Community Care"
                className="h-12 w-12 object-contain"
              />
              <span className="font-display font-bold text-base text-[#2F2F2F] leading-tight">
                AT<br />
                <span className="text-sm font-semibold text-[#8E6BBF] leading-none">Community Care</span>
              </span>
            </Link>
            <p className="text-sm text-[#5a5a5a] leading-relaxed mb-6">
              A registered NDIS provider delivering compassionate, person-centered support across Melbourne.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:+61450602904" className="flex items-center gap-2.5 hover:text-[#8E6BBF] transition-colors">
                <Phone size={14} className="text-[#8E6BBF] shrink-0" /> +61 450 602 904
              </a>
              <a href="mailto:hello@atcommunitycare.com.au" className="flex items-center gap-2.5 hover:text-[#8E6BBF] transition-colors break-all">
                <Mail size={14} className="text-[#8E6BBF] shrink-0" /> hello@atcommunitycare.com.au
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#8E6BBF] shrink-0 mt-0.5" /> Melbourne, VIC, Australia
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#2F2F2F] font-semibold text-sm mb-5 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {links.services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-[#5a5a5a] hover:text-[#8E6BBF] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#2F2F2F] font-semibold text-sm mb-5 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {links.company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-[#5a5a5a] hover:text-[#8E6BBF] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[#2F2F2F] font-semibold text-sm mb-5 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2.5">
              {links.support.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-[#5a5a5a] hover:text-[#8E6BBF] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#d8cdbd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6a6a6a]">
            © {new Date().getFullYear()} AT Community Care. All rights reserved. NDIS Registered Provider.
          </p>
          <div className="flex items-center gap-1 text-xs text-[#6a6a6a]">
            Made with <Heart size={12} className="text-[#8E6BBF] fill-[#8E6BBF] mx-1" /> in Melbourne, Australia
          </div>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border flex items-center justify-center text-[#6a6a6a] hover:text-[#8E6BBF] transition-colors"
                style={{ borderColor: "#cfc2df" }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
