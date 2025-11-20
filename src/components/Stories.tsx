export default function Stories() {
  const stories = [
    {
      name: "Maria",
      age: 34,
      country: "Sri Lanka",
      story: "After 18 months without pay, Maria was trapped working 16-hour days as a domestic worker. We helped her recover $47,000 in stolen wages and secure safe housing. Today, she's studying to become a nurse.",
      image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Ahmed",
      age: 29,
      country: "Bangladesh",
      story: "A construction accident left Ahmed injured with no compensation. His employer threatened deportation if he complained. Our legal team won his case—he received $180,000 in damages and is now an advocate for worker safety.",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Riya",
      age: 41,
      country: "Kolkata",
      story: "Rosa fled violence only to face exploitation in garment factories. We provided legal protection, language classes, and job training. She now runs a workers' cooperative employing 15 women from her community.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            From Survival to Thriving
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            These are just three of thousands of stories. Behind every number is a name, a dream, and a life forever changed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-amber-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{story.name}, {story.age}</h3>
                  <p className="text-amber-400 font-semibold">{story.country}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-700 leading-relaxed">
                  {story.story}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-2xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              They Didn't Choose to Be Vulnerable
            </h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Desperation drove them across borders. Poverty forced them into dangerous work. Systemic injustice kept them silent. But their humanity demands our action.
            </p>
            <div className="inline-block bg-amber-500/20 border border-amber-500/30 rounded-lg p-6">
              <p className="text-lg text-amber-400 font-semibold">
                Every month, we turn away 200+ workers because we lack resources. Your support could change that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
