import { Users, Briefcase, Home, TrendingUp } from 'lucide-react';

export default function Impact() {
  const stats = [
    {
      icon: Users,
      number: "12,847",
      label: "Workers Protected",
      description: "Legal aid and advocacy services provided"
    },
    {
      icon: Briefcase,
      number: "₹4.2 Crore",
      label: "Wages Recovered",
      description: "Stolen wages returned to workers"
    },
    {
      icon: Home,
      number: "3,421",
      label: "Families Housed",
      description: "Safe shelter and transitional housing"
    },
    {
      icon: TrendingUp,
      number: "89%",
      label: "Success Rate",
      description: "Cases won for worker justice"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
          backgroundSize: '10px 10px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Change, Real Lives
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Behind every statistic is a human story—a family reunited, a worker paid fairly, a child given hope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex w-16 h-16 bg-amber-500/20 border-2 border-amber-500 rounded-full items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-amber-400" />
                </div>
                <div className="text-5xl font-bold text-amber-400 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            The Crisis Demands Action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-slate-900/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold text-slate-900 mb-2">Every 30 seconds</div>
              <div className="text-slate-800">A migrant worker is exploited or denied basic rights</div>
            </div>
            <div className="bg-slate-900/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold text-slate-900 mb-2">1 in 4 workers</div>
              <div className="text-slate-800">Live in overcrowded, unsafe housing conditions</div>
            </div>
            <div className="bg-slate-900/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold text-slate-900 mb-2">Most vulnerable</div>
              <div className="text-slate-800">Have no legal representation or protection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
