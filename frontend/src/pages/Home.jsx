// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Spinner from '../components/Spinner';
// import { Link } from 'react-router-dom';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { BsInfoCircle } from 'react-icons/bs';
// import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
// import BooksTable from '../components/home/BooksTable';
// import BooksCard from '../components/home/BooksCard';

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showType, setShowType] = useState('table');

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get('http://localhost:8080/books')
//       .then((response) => {
//         setBooks(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className='p-4'>
//       <div className='flex justify-center items-center gap-x-4'>
//         <button
//           className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//           onClick={() => setShowType('table')}
//         >
//           Table
//         </button>
//         <button
//           className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//           onClick={() => setShowType('card')}
//         >
//           Card
//         </button>
//       </div>
//       <div className='flex justify-between items-center'>
//         <h1 className='text-3xl my-8'>Books List</h1>
//         <Link to='/books/create'>
//           <MdOutlineAddBox className='text-sky-800 text-4xl' />
//         </Link>
//       </div>
//       {loading ? (
//         <Spinner />
//       ) : showType === 'table' ? (
//         <BooksTable books={books} />
//       ) : (
//         <BooksCard books={books} />
//       )}
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:8080/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-red-50 min-h-screen">
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

      <div className="flex justify-between items-center mb-6">
      
  <h1 className="text-4xl font-bold text-red-600">Books List</h1>

        <Link to="/books/create">
        
          <MdOutlineAddBox className="text-red-500 text-5xl hover:text-red-600 transition-all" ></MdOutlineAddBox>
        </Link>
      </div>

      <div className="shadow-lg rounded-lg bg-white p-6 border border-red-200">
        {loading ? (
          <Spinner />
        ) : showType === 'table' ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;
