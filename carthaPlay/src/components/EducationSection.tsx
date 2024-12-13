import React from 'react';
import { BookOpen, GraduationCap, Globe, Sparkles } from 'lucide-react';

export const EducationSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "L'apprentissage ludique",
      description: "Transformez l'éducation en une aventure captivante grâce à nos jeux interactifs spécialement conçus."
    },
    {
      icon: GraduationCap,
      title: "Excellence pédagogique",
      description: "Des contenus alignés sur les programmes scolaires, créés par des experts en éducation."
    },
    {
      icon: Globe,
      title: "Culture française",
      description: "Immergez-vous dans la richesse de la culture française à travers des jeux éducatifs stimulants."
    },
    {
      icon: Sparkles,
      title: "Innovation éducative",
      description: "Une approche moderne qui combine technologie et pédagogie pour un apprentissage optimal."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            L'éducation réinventée
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez une nouvelle façon d'apprendre le français et sa culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};