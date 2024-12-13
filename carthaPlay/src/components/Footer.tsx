import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Send, ArrowRight } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white mt-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Newsletter Section - Highlighted */}
        <div className="max-w-2xl mx-auto mb-16 bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Restez connecté !</h3>
            <p className="text-gray-200">
              Recevez nos dernières actualités et offres spéciales directement dans votre boîte mail
            </p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-indigo-900 rounded-xl font-semibold hover:bg-indigo-100 transition-colors duration-200 flex items-center gap-2"
            >
              S'abonner
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact
            </h3>
            <address className="not-italic space-y-2 text-gray-300">
              <p>Rue des Pionniers</p>
              <p>Tunis, Tunisie</p>
              <p>contact@carthaplay.tn</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/teacher/create-game" className="text-gray-300 hover:text-white transition-colors">Créer un jeu</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Tarifs</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/join" className="text-gray-300 hover:text-white transition-colors">Nous rejoindre</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/CarthaPlay" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/CarthaPlay" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/CarthaPlay" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/CarthaPlay" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-white/10 pt-8 text-center space-y-4">
          <div className="flex justify-center space-x-4 text-sm">
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Politique de confidentialité</Link>
            <span className="text-gray-500">•</span>
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Conditions d'utilisation</Link>
          </div>
          <p className="text-sm text-gray-400">© 2024 CarthaPlay. Tous droits réservés.</p>
          <p className="text-lg font-medium bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            "Apprendre en s'amusant : la clé pour un futur brillant."
          </p>
        </div>
      </div>
    </footer>
  );
};