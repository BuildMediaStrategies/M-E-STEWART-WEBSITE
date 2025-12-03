import React from 'react';

const projects = [
  {
    title: "Modern Extension",
    category: "Residential - Deal",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Urban Loft",
    category: "Renovation - Dover",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop"
  },
  {
    title: "Commercial Hub",
    category: "Commercial - Sandwich",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Luxury Kitchen",
    category: "Interior - Walmer",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1470&auto=format&fit=crop"
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
             <h2 className="text-4xl font-bold uppercase text-brand-darkBlue sm:text-5xl">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-brand-blue mt-4"></div>
            <p className="mt-4 text-brand-slate">Delivering excellence across Kent.</p>
          </div>
          <button className="text-white bg-brand-blue hover:bg-brand-darkBlue px-6 py-3 rounded-full font-bold uppercase tracking-wide transition-colors shadow-md">
            View All Projects &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative h-80 w-full overflow-hidden rounded-3xl cursor-pointer shadow-lg">
              <img 
                src={project.img} 
                alt={project.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkBlue/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-8">
                <span className="text-blue-400 font-bold uppercase text-sm mb-2">{project.category}</span>
                <h3 className="text-white text-3xl font-bold uppercase">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};