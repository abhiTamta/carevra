import { Mail, Send } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white">Carevra</h3>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Care that reaches every paw, hoof & wing.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-white">Company</h4>
          <ul className="text-sm mt-3 space-y-2 text-gray-400">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-white">Services</h4>
          <ul className="text-sm mt-3 space-y-2 text-gray-400">
            <li>
              <Link href="/services/vet">Vet</Link>
            </li>
            <li>
              <Link href="/services/grooming">Grooming</Link>
            </li>
            <li>
              <Link href="/services/boarding">Boarding</Link>
            </li>
            <li>
              <Link href="/services/pet-transport">Transport</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-white">Legal</h4>
          <ul className="text-sm mt-3 space-y-2 text-gray-400">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/insurance">Insurance</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="sm:col-span-2 md:col-span-1">
          <h4 className="font-bold text-white flex items-center gap-2">
            <Mail className="w-5 h-5" /> Newsletter
          </h4>
          <p className="text-xs text-gray-400 mt-2 mb-3">
            Get pet care tips, offers & updates.
          </p>

          <div className="flex items-center bg-gray-800 rounded-xl p-1 pr-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-3 py-2 text-sm outline-none text-white placeholder-gray-500"
            />
            <button className="text-teal-500 hover:text-teal-300 transition">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center">
        <p className="text-xs text-gray-500">
          © 2025 Carevra — Care for Every Life
        </p>
      </div>
    </footer>
  );
};

export default Footer;
