import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-teal-600 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-12">
            Reach us for pet care support, partnerships, or mobile app assistance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { Icon: Phone, title: "Call Support", desc: "+1 800 456 7890" },
              { Icon: Mail, title: "Email Us", desc: "support@carevra.com" },
              { Icon: Globe, title: "Global Reach", desc: "India • UAE • UK • USA" },
              { Icon: Clock, title: "Working Hours", desc: "24/7 for emergencies" },
            ].map((c, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                <c.Icon className="w-9 h-9 text-teal-600 mx-auto mb-3"/>
                <h3 className="text-xl font-bold text-gray-900">{c.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-teal-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Illustration */}
          <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/contact/animal_contact_help.jpg"
              alt="Animal Care Support"
              fill
              className="object-cover"
            />
          </div>

          {/* Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-teal-100">
            <h3 className="text-2xl font-bold text-teal-600 mb-2">Send a Message</h3>
            <p className="text-xs text-gray-500 mb-5">We usually reply within a few hours</p>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-600 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-600 transition"
              />

              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-600 transition"
              />

              <textarea
                rows="4"
                placeholder="Your Message..."
                className="border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none resize-none focus:border-teal-600 transition"
              />

              <Button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4"/> Submit
              </Button>
            </form>
          </div>

        </div>
      </section>

      {/* Map + Office */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Office Details */}
          <div className="text-left px-4">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-teal-600"/> Head Office
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Carevra Animal Care Pvt Ltd.<br/>
              5th Avenue Business Hub,<br/>
              Global Tech City, New Delhi, India
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Phone className="w-4 h-4 text-teal-600"/> +91 98765 43210
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Mail className="w-4 h-4 text-teal-600"/> hello@carevra.com
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock className="w-4 h-4 text-teal-600"/> Mon – Sun, 24/7 Support
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative w-full h-[360px] rounded-2xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 text-sm flex items-center gap-2">
              <Globe className="w-5 h-5"/> Map integration here
            </span>
          </div>

        </div>
      </section>

    </main>
  );
}
