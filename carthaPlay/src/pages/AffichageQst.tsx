import React, { useState } from 'react';
import { Pencil, Trash2, Plus, BookOpen } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

function AffichageQst() {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      text: 'Quelle est la capitale de la France?',
      options: ['Londres', 'Paris', 'Berlin'],
      correctAnswer: 1,
    },
    {
      id: 2,
      text: 'Quel est le plus grand océan du monde?',
      options: ['Atlantique', 'Indien', 'Pacifique'],
      correctAnswer: 2,
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [newQuestion, setNewQuestion] = useState({
    text: '',
    options: ['', '', ''],
    correctAnswer: 0,
  });

  const handleDelete = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleEdit = (id: number) => {
    setEditingId(id);
  };

  const handleUpdate = (id: number, updatedQuestion: Partial<Question>) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, ...updatedQuestion } : q))
    );
    setEditingId(null);
  };

  const handleAdd = () => {
    if (newQuestion.text && newQuestion.options.every((opt) => opt)) {
      const newId = Math.max(...questions.map((q) => q.id), 0) + 1;
      setQuestions([...questions, { ...newQuestion, id: newId }]);
      setNewQuestion({ text: '', options: ['', '', ''], correctAnswer: 0 });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="flex items-center space-x-2">
        <div className="relative animate-float">
          <BookOpen className="h-8 w-8 text-indigo-600" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          CarthaPlay
        </span>
      </div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Gestionnaire de Questions
        </h1>

        {questions.map((question) => (
          <div
            key={question.id}
            className="bg-white rounded-lg shadow-md p-6 mb-6"
          >
            {editingId === question.id ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={question.text}
                  onChange={(e) =>
                    handleUpdate(question.id, { text: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                />
                {question.options.map((option, idx) => (
                  <div key={idx} className="flex gap-2">
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...question.options];
                        newOptions[idx] = e.target.value;
                        handleUpdate(question.id, { options: newOptions });
                      }}
                      className="flex-1 p-2 border rounded"
                    />
                    <input
                      type="radio"
                      checked={question.correctAnswer === idx}
                      onChange={() =>
                        handleUpdate(question.id, { correctAnswer: idx })
                      }
                      className="mt-3"
                    />
                  </div>
                ))}
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Sauvegarder
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
                <div className="space-y-2 mb-4">
                  {question.options.map((option, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded ${
                        idx === question.correctAnswer
                          ? 'bg-green-100 border-green-500'
                          : 'bg-gray-50'
                      }`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(question.id)}
                    className="flex items-center gap-2 px-4 py-2 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50"
                  >
                    <Pencil size={16} /> Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(question.id)}
                    className="flex items-center gap-2 px-4 py-2 text-red-600 border border-red-600 rounded hover:bg-red-50"
                  >
                    <Trash2 size={16} /> Supprimer
                  </button>
                </div>
              </>
            )}
          </div>
        ))}

        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">
            Ajouter une nouvelle question
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Entrez votre question"
              value={newQuestion.text}
              onChange={(e) =>
                setNewQuestion({ ...newQuestion, text: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
            {newQuestion.options.map((option, idx) => (
              <div key={idx} className="flex gap-2">
                <input
                  type="text"
                  placeholder={`Option ${idx + 1}`}
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...newQuestion.options];
                    newOptions[idx] = e.target.value;
                    setNewQuestion({ ...newQuestion, options: newOptions });
                  }}
                  className="flex-1 p-2 border rounded"
                />
                <input
                  type="radio"
                  checked={newQuestion.correctAnswer === idx}
                  onChange={() =>
                    setNewQuestion({ ...newQuestion, correctAnswer: idx })
                  }
                  className="mt-3"
                />
              </div>
            ))}
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              <Plus size={20} /> Ajouter la question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffichageQst;
