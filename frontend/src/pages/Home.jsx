// import React, { useEffect, useState } from 'react';
// import { apiClient } from '../utils/api';
// import Spinner from '../components/Spinner';
// import { Link } from 'react-router-dom';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { BsInfoCircle, BsSearch } from 'react-icons/bs';
// import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
// import BooksTable from '../components/home/BooksTable';
// import BooksCard from '../components/home/BooksCard';

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showType, setShowType] = useState('table');
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setLoading(true);
//     apiClient
//       .get('/books')
//       .then((response) => {
//         setBooks(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   // Enhanced filter function to include publishYear
//   const filteredBooks = books.filter((book) => {
//     const searchLower = searchTerm.toLowerCase();
//     const publishYearStr = book.publishYear.toString();
    
//     return (
//       book.title.toLowerCase().includes(searchLower) ||
//       book.author.toLowerCase().includes(searchLower) ||
//       publishYearStr.includes(searchLower)
//     );
//   });

//   return (
//     <div className="p-6 bg-red-50 min-h-screen">
//       {/* Enhanced Search Bar */}
//       <div className="relative max-w-xl mx-auto mb-8">
//         <input
//           type="text"
//           placeholder="Search by title, author, or year..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full px-4 py-3 pl-12 rounded-full border-2 border-red-200 focus:border-red-500 focus:outline-none shadow-sm"
//         />
//         <BsSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-400 text-xl" />
//       </div>

//       <div className="flex justify-center items-center gap-x-4 mb-6">
//         <button
//           className={`px-4 py-2 rounded-full text-white font-semibold transition-all ${
//             showType === 'table' ? 'bg-red-500' : 'bg-red-300 hover:bg-red-400'
//           }`}
//           onClick={() => setShowType('table')}
//         >
//           <BsInfoCircle className="inline-block mr-2" /> Table View
//         </button>
//         <button
//           className={`px-4 py-2 rounded-full text-white font-semibold transition-all ${
//             showType === 'card' ? 'bg-red-500' : 'bg-red-300 hover:bg-red-400'
//           }`}
//           onClick={() => setShowType('card')}
//         >
//           <AiOutlineEdit className="inline-block mr-2" /> Card View
//         </button>
//       </div>

//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-4xl font-bold text-red-600">Books List</h1>
//         <Link to="/books/create">
//           <MdOutlineAddBox className="text-red-500 text-5xl hover:text-red-600 transition-all" />
//         </Link>
//       </div>

//       <div className="shadow-lg rounded-lg bg-white p-6 border border-red-200">
//         {loading ? (
//           <Spinner />
//         ) : showType === 'table' ? (
//           <BooksTable books={filteredBooks} />
//         ) : (
//           <BooksCard books={filteredBooks} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from 'react';
import { apiClient } from '../utils/api';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle, BsSearch } from 'react-icons/bs';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    apiClient
      .get('/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const filteredBooks = books.filter((book) => {
    const searchLower = searchTerm.toLowerCase();
    const publishYearStr = book.publishYear.toString();
    
    return (
      book.title.toLowerCase().includes(searchLower) ||
      book.author.toLowerCase().includes(searchLower) ||
      publishYearStr.includes(searchLower)
    );
  });

  return (
    <div className="bg-red-50 min-h-screen pt-16"> {/* Added padding-top to account for navbar height */}
      <div className="p-6"> {/* Add padding for content */}
        {/* Enhanced Search Bar */}
        <div className="relative max-w-xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search by title, author, or year..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-full border-2 border-red-200 focus:border-red-500 focus:outline-none shadow-sm"
          />
          <BsSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-400 text-xl" />
        </div>

        {/* Button Group for View Type */}
        <div className="flex justify-center items-center gap-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-full text-white font-semibold transition-all ${
              showType === 'table' ? 'bg-red-500' : 'bg-red-300 hover:bg-red-400'
            }`}
            onClick={() => setShowType('table')}
          >
            <BsInfoCircle className="inline-block mr-2" /> Table View
          </button>
          <button
            className={`px-4 py-2 rounded-full text-white font-semibold transition-all ${
              showType === 'card' ? 'bg-red-500' : 'bg-red-300 hover:bg-red-400'
            }`}
            onClick={() => setShowType('card')}
          >
            <AiOutlineEdit className="inline-block mr-2" /> Card View
          </button>
        </div>

        {/* Books List Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-red-600">Books List</h1>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-red-500 text-5xl hover:text-red-600 transition-all" />
          </Link>
        </div>

        {/* Books Table or Card */}
        <div className="shadow-lg rounded-lg bg-white p-6 border border-red-200">
          {loading ? (
            <Spinner />
          ) : showType === 'table' ? (
            <BooksTable books={filteredBooks} />
          ) : (
            <BooksCard books={filteredBooks} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
