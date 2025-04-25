import React from "react";

const TimeLine = () => {
  const timelineData = [
    {
      date: "Mar 2025 – Present",
      title: "Business Development & Data Strategy Executive",
      subtitle: "Intelsense.ai",
    },
    {
      date: "Nov 2024 – Mar 2025",
      title: "Business Development & Operations Executive",
      subtitle: "Intelsense.ai",
    },
    {
      date: "Jun 2024 – Nov 2024",
      title: "Business Development Executive (Intern)",
      subtitle: "Intelsense.ai",
    },
    {
      date: "Jan 2025 – Present",
      title: "Full-Stack Digital Marketer",
      subtitle: "BE IT Clothing Co.",
    },
    {
      date: "Website Projects – Ongoing",
      title: "Website Developer & Digital Marketer",
      subtitle:
        "PTQL BD | BEIT Clothing Co. | ZHM International Trading | JontroBazar & More",
    },
    {
      date: "2019 – 2024",
      title: "Bachelor of Business Administration (BBA)",
      subtitle: "University of Dhaka | Major: Management Information Systems",
      description: "CGPA: 3.54/4.00",
    },
    {
      date: "2017 – 2019",
      title: "Higher Secondary Certificate (HSC)",
      subtitle: "Rajuk Uttara Model College",
      description: "GPA: 5.00/5.00",
    },
    {
      date: "2015 – 2017",
      title: "Secondary School Certificate (SSC)",
      subtitle: "Khagrachari Cantonment Public School & College",
      description: "GPA: 4.91/5.00",
    },
  ];

  return (
    <div
      id="timeline"
      className="relative w-full py-16 px-4 bg-gradient-to-br from-teal-900 to-gray-800 text-white"
    >
      {/* Background grid layer - matching the hero section's grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          zIndex: 0,
        }}
      ></div>

      {/* Timeline card content */}
      <div className="relative z-10 max-w-3xl mx-auto bg-gray-800 bg-opacity-70 p-10 rounded-md shadow-lg backdrop-blur-sm">
        <h2 className="text-2xl font-semibold mb-6">Timeline</h2>
        <div className="relative border-l-2 border-white/20 pl-6">
          {timelineData.map((item, idx) => (
            <div key={idx} className="mb-10">
              <div className="absolute -left-[9px] w-4 h-4 bg-white rounded-full border-2 border-gray-800"></div>
              <p className="text-sm text-gray-400">{item.date}</p>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.subtitle}</p>
              {item.description && (
                <p className="text-sm text-gray-400">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
