'use client';

import { ArrowUpRight } from "lucide-react";
import {
  ShoppingCart,
  Store,
  LayoutDashboard,
  Package,
  PenTool,
} from "lucide-react";
import { FaAmazon } from "react-icons/fa";
import { SiEbay, SiShopify, SiWalmart } from "react-icons/si";
import { PiPenNibLight } from "react-icons/pi";

const services = [
  {
    title: "Amazon Services",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    icon: FaAmazon,
    details: [
      "Keyword Research",
      "Listing Optimization",
      "Customer Support",
      "A to Z Guarantee Claims",
      "Amazon Cases",
      "Account Health",
      "Listing Issues",
      "A+ (EBC) Creation",
      "Storefront Creation",
      "Campaign Management",
      "Coupon/Promotion Management",
      "Infringements",
      "Hijacker Removal",
      "Business Report",
      "Account Management",
      "MAP Enforcement",
    ],
  },
  {
    title: "Ebay Services",
    color: "text-blue-300",
    bg: "bg-blue-500/10",
    icon: SiEbay,
    details: [
      "Store Setup & Optimization",
      "Product Listing & Management",
      "Customer Service",
      "Order Fulfillment",
      "Marketing & Promotions",
      "Account Health Management",
      "eBay SEO Optimization",
      "Promotions & Advertising",
      "eBay Cases",
    ],
  },
  {
    title: "Shopify Services",
    color: "text-green-300",
    bg: "bg-green-500/10",
    icon: SiShopify,
    details: [
      "Store Setup & Customization",
      "Product Upload & Management",
      "Payment Gateway Integration",
      "App Integration",
      "Theme Customization",
      "SEO Optimization",
      "Marketing & Promotions",
      "Customer Support",
      "Order Management",
    ],
  },
  {
    title: "Walmart Services",
    color: "text-indigo-300",
    bg: "bg-indigo-500/10",
    icon: SiWalmart,
    details: [
      "Account Setup & Management",
      "Product Listing & Optimization",
      "Inventory Management",
      "Order Fulfillment",
      "Customer Service",
      "Walmart SEO Optimization",
      "Account Health Monitoring",
      "Walmart Cases",
    ],
  },
  {
    title: "Design & Development",
    color: "text-pink-300",
    bg: "bg-pink-500/10",
    icon: PiPenNibLight,
    details: [
      "Logo Design",
      "Brand Identity",
      "Packaging Design",
      "Print Design",
      "Social Media Graphics",
      "Marketing Materials",
      "Infographics",
      "Website Design",
      "App Development",
      "UI/UX Design",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="min-h-[700px] bg-black text-white">
      {/* Header */}
      <div className="flex justify-between items-center px-6 sm:px-12 py-6 sm:py-8 border-b border-white sm:border-b-0">
        <h2 className="text-2xl sm:text-3xl font-semibold">What We Do</h2>
        <a href="#" className="text-blue-500 text-sm flex items-center gap-1 hover:underline">
          more <ArrowUpRight size={14} />
        </a>
      </div>

      {/* 🔁 Mobile */}
      <div className="block sm:hidden divide-y divide-white">
        {services.map((service, index) => (
          <div key={index} className="flex justify-between items-center px-6 py-6">
            <div className="flex items-center gap-3">
              <service.icon size={22} className={service.color} />
              <p className="text-lg font-normal">{service.title}</p>
            </div>
            <ArrowUpRight size={20} className="text-white" />
          </div>
        ))}
      </div>

      {/* 💻 Desktop */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 px-6 lg:px-12">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative group border border-gray-800 rounded-xl overflow-hidden
            h-[250px] lg:h-[500px] bg-gradient-to-b from-gray-900 to-black
            hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3
            transform rotate-90 group-hover:opacity-0 transition-all duration-300">
              <service.icon size={78} className={`${service.color}`} />
              <p className="text-lg font-light whitespace-nowrap">{service.title}</p>
            </div>

            {/* Hover layer (dim glass background) */}
            <div
              className={`absolute inset-0 ${service.bg} backdrop-blur-md 
              bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 
              flex flex-col justify-center items-start px-6 py-6`}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <service.icon size={46} className={service.color} />
                {service.title}
              </h3>

              <ul className="space-y-1">
                {service.details.map((detail, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-200 hover:text-white transition"
                  >
                    • {detail}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-4 left-6 animate-bounce">
                <ArrowUpRight size={22} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
