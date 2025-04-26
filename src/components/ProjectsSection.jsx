import React from "react";

const projects = [
  {
    title: "Website Projects",
    description: "An Ecommerce Website for JontroBazar",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiit5zX4hu1KHohz21W4TXlJpAP_bpb7UM7rYBGinoasElTR82sCmASGKXFftYsrnZYnrvF0QK1FTMHe9tZzst9y3SFYUsV-dBzwG57KEq3gwrXh_XmnHiJVfoi1_-tC4_lmkenmBG9uJbKVhgQTkjIv1U-pt-g6ZRVTKZKslC4l-O5RIIsYntFKgm_v9k/s320/Screenshot%202025-04-26%20005140.png", // replace with your actual image path or URL
    liveLink: "https://jontrobazar.com/",
    tags: ["Web"],
  },
  {
    title: "Event Management App",
    description: "An event management application. Build using VUE JS",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVevK1FdiLtSyu6OPPCTur0vy-25AmfrBBw_2VzLfTkHjaCBozbGwQ-PXqKAvd9K2GmFQy6ujX1cmwUWbO97f0i_bT4f9zrf_80lFFzw-zrR6fOtgxcfKqxdxFBv3iEhPbEhZji8Ki-KcFOgg_U24rlqQP8mMIvX2uD1QXAOBgR-M03-hcKEPHvArYIl0/s320/Screenshot%202025-04-26%20093735.png",
    liveLink: "https://github.com/mdriad8/Event_Managemnet-VUEProject",
    tags: ["Web"],
  },
];

const ProjectCard = ({ title, description, image, liveLink, tags }) => (
  <div className="bg-white rounded-md shadow-lg overflow-hidden">
    <div className="w-full aspect-video overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="p-4">
      <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full uppercase tracking-wide">
        {tags[0]}
      </span>
      <h3 className="text-lg font-semibold mt-2 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        href={liveLink}
        className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Preview ↗
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div
      id="project"
      className="w-full bg-gradient-to-br from-gray-800 to-teal-900 text-white py-16 px-4 relative"
    >
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

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
