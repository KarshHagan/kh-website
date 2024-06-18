import dotenv from 'dotenv';
import express from 'express';
import OpenAI from 'openai';

dotenv.config();
const app = express();
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Functionality
app.post('/khChat', async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
      model: 'gpt-3.5-turbo',
    });
    return res.status(200).json({
      success: true,
      data: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error('Error:', error); // Log the error
    return res.status(400).json({
      success: false,
      error: error.response ? error.response.data : 'Server Issue',
    });
  }
});
// -------------

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
