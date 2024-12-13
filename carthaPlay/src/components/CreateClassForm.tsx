import React, { useState } from 'react';
import { Users, School, BookOpen } from 'lucide-react';

interface CreateClassFormProps {
  onClose: () => void;
  onSubmit: (classData: any) => void;
}

export const CreateClassForm: React.FC<CreateClassFormProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    capacity: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 transform transition-all">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Créer une nouvelle classe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <Users className="absolute left-3 top-[2.1rem] transform w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom de la classe
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring focus:ring-indigo-200 transition-all duration-200"
              placeholder="Ex: 4A"
              required
            />
          </div>

          <div className="relative group">
            <School className="absolute left-3 top-[2.1rem] transform w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Niveau
            </label>
            <select
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: e.target.value })}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring focus:ring-indigo-200 transition-all duration-200"
              required
            >
              <option value="">Sélectionner un niveau</option>
              <option value="4">4ème année</option>
              <option value="5">5ème année</option>
              <option value="6">6ème année</option>
            </select>
          </div>

          <div className="relative group">
            <BookOpen className="absolute left-3 top-[2.1rem] transform w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Capacité
            </label>
            <input
              type="number"
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring focus:ring-indigo-200 transition-all duration-200"
              placeholder="Nombre d'élèves"
              min="1"
              required
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-6 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all duration-200"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium transform hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200"
            >
              Créer la classe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};