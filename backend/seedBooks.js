// seedBooks.js

import mongoose from 'mongoose';
import { mongoDBURL } from './config.js';

// Define the Book schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishYear: Number,
  summary: String,
});

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

// Sample books data to insert
const booksData = [
    {
      title: "The Last Bookshop in London",
      author: "Madeline Martin",
      publishYear: 2021,
      summary: "A historical fiction novel about a young woman who discovers the power of books during the London Blitz."
    },
    {
      title: "Cloud Cuckoo Land",
      author: "Anthony Doerr",
      publishYear: 2021,
      summary: "An ambitious novel that weaves together three storylines across different time periods, connected by an ancient text."
    },
    {
      title: "Beautiful World, Where Are You",
      author: "Sally Rooney",
      publishYear: 2021,
      summary: "A novel about four young people navigating love, friendship and politics in contemporary Ireland."
    },
    {
      title: "The Lincoln Highway",
      author: "Amor Towles",
      publishYear: 2021,
      summary: "A compelling story of three young men on a journey across 1950s America."
    },
    {
      title: "Matrix",
      author: "Lauren Groff",
      publishYear: 2021,
      summary: "A bold vision of female power in medieval times, following a cast-out royal who transforms an impoverished abbey."
    },
    {
      title: "The Paper Palace",
      author: "Miranda Cowley Heller",
      publishYear: 2021,
      summary: "A story of summer love, family secrets, and the choices that echo through generations."
    },
    {
      title: "Great Circle",
      author: "Maggie Shipstead",
      publishYear: 2021,
      summary: "An epic story of a daring female aviator and the actress who portrays her decades later."
    },
    {
      title: "The Four Winds",
      author: "Kristin Hannah",
      publishYear: 2021,
      summary: "A powerful American epic about love, heroism, and hope, set during the Great Depression."
    },
    {
      title: "Harlem Shuffle",
      author: "Colson Whitehead",
      publishYear: 2021,
      summary: "A family saga masquerading as a crime novel, set in 1960s Harlem."
    },
    {
      title: "The Heart Principle",
      author: "Helen Hoang",
      publishYear: 2021,
      summary: "A contemporary romance about a woman finding her voice and her way back to love."
    },
    {
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      publishYear: 2020,
      summary: "A woman makes a Faustian bargain to live forever but is cursed to be forgotten by everyone she meets."
    },
    {
      title: "Mexican Gothic",
      author: "Silvia Moreno-Garcia",
      publishYear: 2020,
      summary: "A reimagining of the classic gothic suspense novel, set in 1950s Mexico."
    },
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      publishYear: 2020,
      summary: "Between life and death, a library exists where one can explore different versions of their life."
    },
    {
      title: "Hamnet",
      author: "Maggie O'Farrell",
      publishYear: 2020,
      summary: "A fictional account of the life of Shakespeare's son and the impact of his death on the family."
    },
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      publishYear: 2017,
      summary: "An aging Hollywood starlet reveals her life story to an unknown journalist."
    },
    {
      title: "The Song of Achilles",
      author: "Madeline Miller",
      publishYear: 2011,
      summary: "A retelling of the Iliad from the perspective of Patroclus, Achilles' companion."
    },
    {
      title: "The Thursday Murder Club",
      author: "Richard Osman",
      publishYear: 2020,
      summary: "Four retirees meet weekly to solve cold cases, until a real murder occurs in their community."
    },
    {
      title: "Piranesi",
      author: "Susanna Clarke",
      publishYear: 2020,
      summary: "A man lives in a mysterious house with infinite rooms and statues, questioning his reality."
    },
    {
      title: "The Vanishing Half",
      author: "Brit Bennett",
      publishYear: 2020,
      summary: "Twin sisters lead very different lives after running away from their small Black community."
    },
    {
      title: "Such a Fun Age",
      author: "Kiley Reid",
      publishYear: 2019,
      summary: "A young Black babysitter, her well-intentioned employer, and a surprising connection."
    },
    {
      title: "A Gentleman in Moscow",
      author: "Amor Towles",
      publishYear: 2016,
      summary: "A Russian count is sentenced to house arrest in a grand hotel for life."
    },
    {
      title: "The Dutch House",
      author: "Ann Patchett",
      publishYear: 2019,
      summary: "A siblings' bond is tested by their stepmother and their attachment to their childhood home."
    },
    {
      title: "Circe",
      author: "Madeline Miller",
      publishYear: 2018,
      summary: "A feminist retelling of the story of Circe, the witch from Homer's Odyssey."
    },
    {
      title: "The Starless Sea",
      author: "Erin Morgenstern",
      publishYear: 2019,
      summary: "A graduate student discovers a mysterious book that leads him to an underground world."
    },
    {
      title: "On Earth We're Briefly Gorgeous",
      author: "Ocean Vuong",
      publishYear: 2019,
      summary: "A letter from a son to a mother who cannot read, exploring family history and identity."
    }
];

// Function to insert books data
const insertBooksData = async () => {
    try {
      await mongoose.connect(mongoDBURL);
      console.log('Connected to MongoDB');
  
      // Directly insert the booksData without checking for existing documents
      await Book.insertMany(booksData);
      console.log('Books data inserted successfully');
     
    } catch (error) {
      console.error('Error inserting books data:', error);
    } finally {
      await mongoose.disconnect();
    }
  };
  

// Execute the function to insert data
insertBooksData();
