import { portfolio } from '../data/portfolio'

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen w-full flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl font-bold text-black mb-12">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(portfolio.skills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-black mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm bg-gray-100 text-gray-800 rounded-full border border-gray-300 hover:scale-108 transition-all duration-300 hover:bg-gray-200 cursor-pointer"
                  >
                    {skill}
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
