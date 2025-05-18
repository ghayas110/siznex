const ServicesSection = () => {
  const services = [
    {
      title: "Web Design & Development",
      details: [
        "Web Design",
        "Web Development",
        "UI/UX Design",
        "Corporate Web Design",
        "WordPress Development",
        "E-Commerce Web Development",
      ],
    },
    {
      title: "App Development",
      details: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Apps",
        "Custom App Solutions",
      ],
    },
    {
      title: "Videography & Photography",
      details: [
        "Corporate Videos",
        "Event Coverage",
        "Product Photography",
        "Editing & Post-Production",
      ],
    },
    {
      title: "Marketing",
      details: [
        "Digital Marketing",
        "SEO Optimization",
        "Social Media Management",
        "Content Marketing",
      ],
    },
    {
      title: "Design & Branding",
      details: [
        "Logo Design",
        "Brand Identity",
        "Packaging Design",
        "Print Design",
      ],
    },
  ];

  return (
    <section className="min-h-[700px] bg-black text-white">
      {/* Header */}
      <div className="flex justify-between items-center px-12 py-8">
        <h2 className="text-3xl font-semibold">What We Do</h2>
        <a
          href="#"
          className="text-blue-500 text-sm flex items-center gap-1 hover:underline"
        >
          more ↗
        </a>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative group border border-gray-800 rounded-lg overflow-hidden h-[500px] sm:h-[250px] lg:h-[500px]"
          >
            {/* Default Vertical Text */}
            <p className="text-lg font-light transform rotate-90 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap group-hover:opacity-0 transition-opacity duration-300">
              {service.title}
            </p>

            {/* Hover Content */}
            <div className="absolute inset-0 bg-blue-600 flex flex-col justify-center items-start px-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <ul className="space-y-1 animate-slide-in">
                {service.details.map((detail, index) => (
                  <li key={index} className="text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-4 left-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.75L12 14.25L6.75 8.75"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;