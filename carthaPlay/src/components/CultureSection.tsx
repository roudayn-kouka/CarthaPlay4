import React from 'react';
import { Heart, BookOpen, Music, Coffee } from 'lucide-react';

export const CultureSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explorez la culture française
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plongez dans l'univers fascinant de la culture française à travers nos jeux éducatifs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-pink-100 rounded-xl">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">L'art de vivre français</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Découvrez les traditions, la gastronomie et l'art de vivre à la française à travers des 
              jeux immersifs et culturellement enrichissants.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Coffee className="w-5 h-5 text-brown-500" />
                <span>Gastronomie</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Music className="w-5 h-5 text-purple-500" />
                <span>Arts & Culture</span>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <BookOpen className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Langue & Littérature</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Maîtrisez la langue française tout en explorant sa riche littérature à travers des 
              activités ludiques et interactives.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span>Grammaire interactive</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span>Vocabulaire enrichi</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span>Expression écrite et orale</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};