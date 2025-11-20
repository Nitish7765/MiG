import { Heart, Shield, GraduationCap, Home } from 'lucide-react';

export default function Mission() {
  const missions = [
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Fighting for workers' rights and providing free legal aid to those facing exploitation, wage theft, and unsafe working conditions."
    },
    {
      icon: Home,
      title: "Safe Housing",
      description: "Establishing dignified shelter and transitional housing for migrant workers and their families escaping abuse."
    },
    {
      icon: GraduationCap,
      title: "Education & Skills",
      description: "Empowering workers with language training, vocational skills, and pathways to better opportunities."
    },
    {
      icon: Heart,
      title: "Health & Wellbeing",
      description: "Providing access to healthcare, mental health support, and emergency assistance for those in crisis."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Every Person Deserves Dignity
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We don't just provide services—we fight for systemic change. Our mission is to transform the lives of migrant workers through advocacy, support, and unwavering commitment to human rights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 rounded-xl p-8 hover:bg-slate-900 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-amber-500 hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">
                  {mission.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-300 transition-colors">
                  {mission.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center">
          <blockquote className="text-2xl md:text-3xl text-white font-light italic mb-6 leading-relaxed">
            "No human being is illegal. Every person who crosses borders seeking survival deserves our compassion, not our contempt."
          </blockquote>
          <p className="text-amber-400 font-semibold">— Our Founding Principle</p>
        </div>
      </div>
    </section>
  );
}
