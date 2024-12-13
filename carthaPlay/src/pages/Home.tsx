import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  GraduationCap,
  Phone,
  Mail,
  CheckCircle,
  Star,
} from 'lucide-react';
import { Background } from '../components/Background';
import { RoleCard } from '../components/RoleCard';
import { EducationSection } from '../components/EducationSection';
import { CultureSection } from '../components/CultureSection';
import { Footer } from '../components/Footer';

export const Home = () => {
  const navigate = useNavigate();

  return (
    
    <div className="min-h-screen relative">
      <Background />

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative animate-float">
                <BookOpen className="h-8 w-8 text-indigo-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                CarthaPlay
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                FR
              </button>
              <div className="w-px h-4 bg-gray-300"></div>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Bienvenue sur{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              CarthaPlay
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez une nouvelle façon d'apprendre et d'enseigner à travers
            des jeux éducatifs interactifs
          </p>
          <div className="flex items-center justify-center space-x-4 mb-12">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <span className="text-lg text-gray-700">
              Contenu conforme au curriculum éducatif
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="text-lg text-gray-700">
              Créé par des enseignants, pour les enseignants
            </span>
            <Star className="h-5 w-5 text-yellow-500" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <RoleCard
            icon={GraduationCap}
            title="Enseignant"
            description="Créez des jeux éducatifs et suivez les progrès de vos élèves"
            gradient="bg-gradient-to-r from-indigo-600 to-purple-600"
            iconBg="bg-indigo-100"
            iconColor="text-indigo-600"
            onClick={() => navigate('/login/teacher')}
          />

          <RoleCard
            icon={BookOpen}
            title="Élève"
            description="Accédez aux jeux et suivez votre progression d'apprentissage"
            gradient="bg-gradient-to-r from-purple-600 to-pink-600"
            iconBg="bg-purple-100"
            iconColor="text-purple-600"
            onClick={() => navigate('/login/student')}
          />
        </div>

        {/* Education Section */}
        <EducationSection />

        {/* Culture Section */}
        <CultureSection />

        {/* Contact Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Contactez-nous
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Phone className="h-5 w-5 text-indigo-600" />
                Téléphones
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>+216 93 629 921</p>
                <p>+216 53 158 628</p>
                <p>+216 23 032 610</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Mail className="h-5 w-5 text-indigo-600" />
                Emails
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>roudayna.kouka@carthaplay.tn</p>
                <p>nader.benSaleh@carthaplay.tn</p>
                <p>abderahmen.jdidi@carthaplay.tn</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};