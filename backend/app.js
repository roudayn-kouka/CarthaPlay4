
const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const QuestionRoutes = require('./routes/QuestionRoutes')
const gameRoutes = require('./routes/gameRoutes')
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://atxlibiabsrnubvasudo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0eGxpYmlhYnNybnVidmFzdWRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1NDk3NzMsImV4cCI6MjA0OTEyNTc3M30.tCc2160i2wwtiGbSjuMSoJ_EAkCy2Uo8pLE89m8_ZJM';
const supabase = createClient(supabaseUrl, supabaseKey);



const app = express();
const cors = require('cors');


connectDB();
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/question', QuestionRoutes);
app.use('/api/game', gameRoutes);
app.get('/api/questions', async (req, res) => {
    try {
      const { data, error } = await supabase
        .from('questions')  
        .select('*'); 
  
      if (error) {
        return res.status(400).json({ error: error.message });
      }
      console.log('Data fetched:', data);
  
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/api/answers', async (req, res) => {
    try {
      const { id } = req.query; 
      if (!id) {
        return res.status(400).json({ error: 'Question ID is required' });
      }
  
      const { data, error } = await supabase
        .from('answers') 
        .select('*') 
        .eq('question_id', id);
  
      if (error) {
        console.error('Supabase error:', error);
        return res.status(400).json({ error: error.message });
      }
  
      console.log('Data fetched:', data); 
      res.status(200).json(data);
    } catch (err) {
      console.error('Server error:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/api/games', async (req, res) => {
    try {
      const { subject, lesson, difficulty, teacher_id } = req.body;
  
      if (!subject || !lesson || !difficulty || !teacher_id) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      const { data, error } = await supabase
        .from('games')
        .insert([
          {
            subject,
            lesson,
            difficulty,
            teacher_id,
          },
        ]);
  
      if (error) {
        return res.status(400).json({ error: error.message });
      }
  
      res.status(201).json({ message: 'Game created successfully', data });
    } catch (err) {
      console.error('Server error:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.post('/api/game/:gameId/questions', async (req, res) => {
    const { gameId } = req.params;
    const { questions } = req.body;
  
    try {
      // Loop through the questions and save them
      for (const questionData of questions) {
        // Save the question to the 'questions' table
        const { data: question, error: questionError } = await supabase
          .from('questions')
          .insert([
            {
              question: questionData.text,
              correct_answer: questionData.correctAnswer,
              game_id: gameId,  // Associate the question with the game
            }
          ])
          .single();
  
        // Log the response to verify what is returned
        console.log('Question Insert Response:', question);
  
        // Check if there was an error saving the question
        if (questionError) {
          console.log('Error inserting question:', questionError);
          return res.status(500).json({ message: 'Error saving question', error: questionError });
        }
  
        // Ensure the question object is valid before using it
        if (!question || !question.id) {
          console.log('Error: Question ID is missing');
          return res.status(500).json({ message: 'Error: Question ID is missing' });
        }
  
        // Save each answer associated with the question
        for (const answerData of questionData.answers) {
          const { error: answerError } = await supabase
            .from('answers')
            .insert([
              {
                text: answerData.text,
                x: answerData.x,  // Position for answer
                question_id: question.id,  // Link the answer to the question
              }
            ]);
  
          // Check if there was an error saving the answer
          if (answerError) {
            console.log('Error inserting answer:', answerError);
            return res.status(500).json({ message: 'Error saving answer', error: answerError });
          }
        }
      }
  
      // Return success response after all questions and answers are saved
      res.status(201).json({ message: 'Questions and answers saved successfully' });
  
    } catch (error) {
      // Log and return the error if something goes wrong
      console.error('Error saving questions and answers:', error);
      res.status(500).json({ message: 'Error saving questions and answers', error });
    }
  });
  
  
  
  
  



module.exports = app;
