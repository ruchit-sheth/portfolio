import { portfolio } from '../data/portfolio'

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen w-full flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl font-bold text-black mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolio.projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-gray-300 rounded-xl hover:-translate-y-1.5 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <h3 className="text-lg font-bold text-black mb-3">{project.name}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, tidx) => (
                  <span
                    key={tidx}
                    className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full border border-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
