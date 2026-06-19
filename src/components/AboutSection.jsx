import { portfolio } from '../data/portfolio'

export default function AboutSection() {
  return (
    <section id="about" className="min-h-[72vh] w-full flex items-center justify-center px-6 py-12 bg-white">
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl font-bold text-black mb-8">About Me</h2>

        <div className="flex gap-12 items-start">
          <div className="flex-1">
            <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-2xl">
              {portfolio.about}
            </p>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-2 gap-5">
              {portfolio.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-gray-100 border border-gray-300 rounded-lg hover:scale-104 transition-all duration-300 hover:shadow-md cursor-pointer"
                >
                  <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
