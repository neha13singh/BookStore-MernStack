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
      title: "The Shadow of the Wind",
      author: "Carlos Ruiz Zafón",
      publishYear: 2001,
      summary: "In post-war Barcelona, a young boy discovers a mysterious book that leads him into a labyrinth of secrets, betrayals, and buried mysteries. As he investigates the book's author, he finds himself entangled in a dangerous web of intrigue that spans decades."
    },
    {
      title: "The Name of the Rose",
      author: "Umberto Eco",
      publishYear: 1980,
      summary: "Set in a 14th century Italian monastery, this intellectual mystery follows a Franciscan friar investigating a series of mysterious deaths. The story weaves together medieval history, semiotics, biblical analysis, and literary theory into a complex murder mystery."
    },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      publishYear: 1967,
      summary: "Chronicles seven generations of the Buendía family in the mythical town of Macondo. The narrative blends magical realism with historical events, exploring themes of love, war, death, and the cyclical nature of time and human experience."
    },
    {
      title: "The God of Small Things",
      author: "Arundhati Roy",
      publishYear: 1997,
      summary: "A powerful story set in Kerala, India, following twins Rahel and Estha as they navigate family tragedy, social expectations, and forbidden love. The narrative explores how small things affect people's behavior and their lives in profound ways."
    },
    {
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      publishYear: 2003,
      summary: "A haunting tale of friendship, betrayal, and redemption set against the backdrop of Afghanistan's tumultuous history. The story follows Amir's journey from Kabul to America and back, as he seeks to right the wrongs of his past."
    },
    {
      title: "The Book Thief",
      author: "Markus Zusak",
      publishYear: 2005,
      summary: "Narrated by Death, this story follows Liesel, a young girl in Nazi Germany who finds solace in stealing books and sharing them with others. Through her experiences, we see the power of words to both destroy and heal in times of war."
    },
    {
      title: "The Poisonwood Bible",
      author: "Barbara Kingsolver",
      publishYear: 1998,
      summary: "The story of the Price family, Baptist missionaries who travel to the Belgian Congo in 1959. Told through the voices of the mother and four daughters, it explores colonialism, religion, and cultural arrogance in post-colonial Africa."
    },
    {
      title: "Cloud Atlas",
      author: "David Mitchell",
      publishYear: 2004,
      summary: "Six interconnected stories spanning from the 19th century to a post-apocalyptic future explore themes of reincarnation, power, and human connection. Each tale influences the next, creating a complex web of cause and effect across time."
    },
    {
      title: "The Secret History",
      author: "Donna Tartt",
      publishYear: 1992,
      summary: "A group of classics students at an elite New England college become entangled in a web of secrets, ritual, and murder. The story explores the dark side of intellectual pursuit and the consequences of trying to live life according to ancient ideals."
    },
    {
      title: "Life of Pi",
      author: "Yann Martel",
      publishYear: 2001,
      summary: "After a shipwreck, sixteen-year-old Pi finds himself adrift in the Pacific Ocean on a lifeboat with a Bengal tiger. This extraordinary tale explores faith, survival, and the nature of truth through Pi's 227-day journey across the ocean."
    },
    {
      title: "The Night Circus",
      author: "Erin Morgenstern",
      publishYear: 2011,
      summary: "A mysterious circus that only opens at night becomes the venue for a complex magical competition between two young illusionists, bound by a destiny they cannot escape. Their growing love threatens to unravel the delicate balance of the entire circus."
    },
    {
      title: "The Goldfinch",
      author: "Donna Tartt",
      publishYear: 2013,
      summary: "After surviving a terrorist bombing at an art museum that kills his mother, a young boy steals a priceless painting in the chaos. This act sets him on a journey through loss, deception, and redemption spanning decades and continents."
    },
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      publishYear: 2017,
      summary: "An aging Hollywood starlet finally tells her life story to an unknown journalist, revealing the truth behind her seven marriages, her rise to fame, and the secret love that shaped her life. A tale of ambition, unexpected friendship, and forbidden love."
    },
    {
      title: "The Heart's Invisible Furies",
      author: "John Boyne",
      publishYear: 2017,
      summary: "Born to an unwed mother in post-war Ireland, Cyril Avery's life spans seventy years of Irish history. This sweeping narrative explores identity, sexuality, and redemption against the backdrop of a changing society."
    },
    {
      title: "A Little Life",
      author: "Hanya Yanagihara",
      publishYear: 2015,
      summary: "Following four college friends in New York City over decades, this powerful story centers on Jude, whose traumatic past continues to haunt him. An epic tale of friendship, trauma, and the limits of human endurance and love."
    },
    {
      title: "The Great Circle",
      author: "Maggie Shipstead",
      publishYear: 2021,
      summary: "Spanning from the golden age of aviation to present day Hollywood, this epic follows a daring female pilot's attempt to circumnavigate the globe and the actress cast to play her decades later. A sweeping tale of ambition and identity."
    },
    {
      title: "Pachinko",
      author: "Min Jin Lee",
      publishYear: 2017,
      summary: "Following four generations of a Korean family in Japan, this epic explores identity, discrimination, and survival. Beginning in early 20th century Korea, the story shows how one family's decisions ripple through generations."
    },
    {
      title: "The Overstory",
      author: "Richard Powers",
      publishYear: 2018,
      summary: "Nine Americans whose unique life experiences with trees bring them together to address the destruction of forests. This sweeping novel explores the essential conflict between humans and nature through interconnected narratives."
    },
    {
      title: "Shantaram",
      author: "Gregory David Roberts",
      publishYear: 2003,
      summary: "Based on true events, this novel follows an escaped Australian convict who finds a new life in the underworld of Bombay. A sprawling tale of love, friendship, betrayal, and redemption in India's largest city."
    },
    {
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      publishYear: 2020,
      summary: "A woman makes a Faustian bargain to live forever but is cursed to be forgotten by everyone she meets. Spanning centuries and continents, this tale explores what it means to leave a mark on the world."
    },
    {
      title: "The Mountain Shadow",
      author: "Gregory David Roberts",
      publishYear: 2015,
      summary: "The sequel to Shantaram continues Lin's journey through Bombay's underworld, exploring philosophy, love, and redemption. This epic narrative delves deeper into the criminal world while examining questions of morality and purpose."
    },
    {
      title: "The Starless Sea",
      author: "Erin Morgenstern",
      publishYear: 2019,
      summary: "A graduate student discovers a mysterious book that leads him to an ancient underground library, secret societies, and lost loves. This multilayered narrative explores the power of stories and the nature of storytelling itself."
    },
    {
      title: "The House of the Spirits",
      author: "Isabel Allende",
      publishYear: 1982,
      summary: "Following three generations of the Trueba family, this magical realist masterpiece weaves together personal and political upheaval in an unnamed Latin American country. A story of love, magic, and revolution spanning decades."
    },
    {
      title: "The Weight of Ink",
      author: "Rachel Kadish",
      publishYear: 2017,
      summary: "Set in London of the 1660s and the early twenty-first century, this intellectual detective story connects two women of remarkable intellect separated by centuries. An exploration of Jewish history, philosophy, and female scholarship."
    },
    {
      title: "The Essex Serpent",
      author: "Sarah Perry",
      publishYear: 2016,
      summary: "In Victorian England, a widow becomes entangled in the search for a mythical sea creature while developing an intense relationship with a local vicar. A story exploring the conflict between faith and reason, science and superstition."
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
