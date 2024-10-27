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
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      publishYear: 2018,
      summary: "A coming-of-age story intertwined with a murder mystery set in the marshes of North Carolina."
    },
    {
      title: "The Vanishing Half",
      author: "Brit Bennett",
      publishYear: 2020,
      summary: "A multi-generational tale about twin sisters who lead very different lives, exploring themes of identity and family."
    },
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      publishYear: 2020,
      summary: "A woman finds herself in a library between life and death, where she can explore alternate versions of her life."
    },
    {
      title: "The Guest List",
      author: "Lucy Foley",
      publishYear: 2020,
      summary: "At a wedding on a remote Irish island, a murder occurs, revealing dark secrets among the guests."
    },
    {
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      publishYear: 2021,
      summary: "A poignant exploration of love and humanity through the eyes of an artificial friend."
    },
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      publishYear: 2017,
      summary: "A reclusive Hollywood icon recounts her glamorous life and loves to a young journalist."
    },
    {
      title: "It Ends with Us",
      author: "Colleen Hoover",
      publishYear: 2016,
      summary: "A poignant story about love, resilience, and the complexities of relationships."
    },
    {
      title: "Circe",
      author: "Madeline Miller",
      publishYear: 2018,
      summary: "A retelling of the life of Circe, the witch from Homer's Odyssey, exploring her journey of self-discovery."
    },
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      publishYear: 2019,
      summary: "A psychological thriller about a woman who stops speaking after committing a shocking act of violence."
    },
    {
      title: "Anxious People",
      author: "Fredrik Backman",
      publishYear: 2020,
      summary: "A poignant story about a failed bank robber who takes a group of strangers hostage during an open house."
    },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      publishYear: 2021,
      summary: "An astronaut wakes up alone on a spaceship with no memory of who he is or why he's there."
    },
    {
      title: "Daisy Jones & The Six",
      author: "Taylor Jenkins Reid",
      publishYear: 2019,
      summary: "A fictional oral history of a 1970s rock band and the tumultuous relationships within."
    },
    {
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      publishYear: 2020,
      summary: "A young woman makes a Faustian bargain to live forever but is forgotten by everyone she meets."
    },
    {
      title: "A Man Called Ove",
      author: "Fredrik Backman",
      publishYear: 2012,
      summary: "A heartwarming tale about a curmudgeonly old man whose life changes when a new family moves in next door."
    },
    {
      title: "The Night Circus",
      author: "Erin Morgenstern",
      publishYear: 2011,
      summary: "A magical competition between two young illusionists unfolds in a mysterious, enchanting circus."
    },
    {
      title: "Little Fires Everywhere",
      author: "Celeste Ng",
      publishYear: 2017,
      summary: "A story of two families in a suburban town, exploring themes of motherhood, race, and privilege."
    },
    {
      title: "Normal People",
      author: "Sally Rooney",
      publishYear: 2018,
      summary: "A complex love story between two teenagers navigating life and relationships in Ireland."
    },
    {
      title: "The Help",
      author: "Kathryn Stockett",
      publishYear: 2009,
      summary: "Set in the 1960s, three women come together to expose the injustices faced by African American maids."
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      publishYear: 1988,
      summary: "A young shepherd's journey to discover his personal legend and the meaning of life."
    },
    {
      title: "The Girl on the Train",
      author: "Paula Hawkins",
      publishYear: 2015,
      summary: "A psychological thriller centered around an alcoholic woman who becomes embroiled in a missing person's investigation."
    },
    {
      title: "The Book Thief",
      author: "Markus Zusak",
      publishYear: 2005,
      summary: "A young girl in Nazi Germany finds solace in stealing books and sharing them with others."
    },
    {
      title: "Life After Life",
      author: "Kate Atkinson",
      publishYear: 2013,
      summary: "A woman lives multiple lives, dying and being reborn, in various scenarios throughout the 20th century."
    },
    {
      title: "Educated",
      author: "Tara Westover",
      publishYear: 2018,
      summary: "A memoir about a woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the world through education."
    },
    {
      title: "The Light We Lost",
      author: "Jill Santopolo",
      publishYear: 2017,
      summary: "A love story about the choices we make and the consequences they have on our lives."
    },
    {
      title: "The Henna Artist",
      author: "Alka Joshi",
      publishYear: 2020,
      summary: "A tale of a young woman who escapes an abusive marriage in India and becomes a successful henna artist."
    },
    {
      title: "A Discovery of Witches",
      author: "Deborah Harkness",
      publishYear: 2011,
      summary: "A historian discovers a bewitched manuscript that draws her into the world of witches and vampires."
    },
    {
      title: "The Ocean at the End of the Lane",
      author: "Neil Gaiman",
      publishYear: 2013,
      summary: "A man returns to his hometown and recalls a mysterious childhood adventure involving ancient forces."
    },
    {
      title: "Pachinko",
      author: "Min Jin Lee",
      publishYear: 2017,
      summary: "A sweeping generational saga of a Korean family living in Japan, exploring themes of identity and survival."
    },
    {
      title: "The Testaments",
      author: "Margaret Atwood",
      publishYear: 2019,
      summary: "A sequel to The Handmaid's Tale, exploring life in Gilead through the eyes of three women."
    },
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
