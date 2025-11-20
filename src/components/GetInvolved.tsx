import { Heart, HandHeart, Users, Megaphone } from 'lucide-react';

export default function GetInvolved() {
  const ways = [
    {
      icon: Heart,
      title: "Monthly Giving",
      description: "Sustain our work with recurring donations that provide predictable support for long-term programs.",
      action: "Start Monthly Gift",
      highlight: "Most Impact"
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Offer your skills—legal aid, translation, teaching, or administrative support. Every hour counts.",
      action: "Join Our Team",
      highlight: null
    },
    {
      icon: Users,
      title: "Corporate Partnership",
      description: "Align your business with worker justice through sponsorships, matching gifts, and employee engagement.",
      action: "Partner With Us",
      highlight: null
    },
    {
      icon: Megaphone,
      title: "Advocate",
      description: "Amplify worker voices by sharing our campaigns, contacting legislators, and raising awareness.",
      action: "Take Action",
      highlight: null
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Your Action Creates Change
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The exploitation of migrant workers won't end with awareness alone. It requires commitment, resources, and collective action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-500"
              >
                {way.highlight && (
                  <div className="absolute -top-3 right-6 bg-amber-500 text-slate-900 text-xs font-bold px-4 py-1 rounded-full">
                    {way.highlight}
                  </div>
                )}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{way.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{way.description}</p>
                    <button className="text-amber-600 font-semibold hover:text-amber-700 hover:underline transition-colors">
                      {way.action} →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Your Donation Can Do
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="text-4xl font-bold text-amber-400 mb-2">₹500</div>
                <div className="text-slate-300">Provides legal consultation for one worker facing wage theft</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="text-4xl font-bold text-amber-400 mb-2">₹1500</div>
                <div className="text-slate-300">Covers one month of language and skills training for a family</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="text-4xl font-bold text-amber-400 mb-2">₹5000</div>
                <div className="text-slate-300">Provides emergency housing for a family escaping exploitation</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-slate-900 text-lg font-bold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                Donate Now
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                Set Up Monthly Giving
              </button>
            </div>

            <p className="mt-8 text-slate-400 text-sm">
              We're a registered 501(c)(3) nonprofit. Your donation is tax-deductible.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-3xl text-slate-800 font-light italic leading-relaxed">
            "Injustice anywhere is a threat to justice everywhere. We are caught in an inescapable network of mutuality, tied in a single garment of destiny."
          </blockquote>
          <p className="mt-4 text-slate-600 font-semibold">— Dr. Martin Luther King Jr.</p>
        </div>
      </div>
    </section>
  );
}
