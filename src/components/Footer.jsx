import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-[#0f2a44]">
    <div className="container-dental py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-heading text-lg font-bold text-primary-foreground">Dental Care Clinic</h3>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Providing exceptional dental care with compassion and expertise for over 20 years.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            {[["About Us", "/about"], ["Services", "/services"], ["Gallery", "/gallery"], ["Contact", "/contact"]].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-sm text-primary-foreground/70 transition-colors hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">Contact</h4>
          <ul className="mt-3 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 123 Smile Street, Health City, HC 12345</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /> (123) 456-7890</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-primary" /> info@dentalcareclinic.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">Hours</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0 text-primary" /> Mon–Fri: 8AM – 6PM</li>
            <li className="pl-6">Saturday: 9AM – 3PM</li>
            <li className="pl-6">Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Dental Care Clinic. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
