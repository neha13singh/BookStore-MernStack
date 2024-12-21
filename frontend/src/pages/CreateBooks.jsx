import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { apiClient } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [summary, setSummary] = useState(''); // New state for summary
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    // Split summary into words and validate the word count
    const wordCount = summary.trim().split(/\s+/).length;
    if (wordCount < 30 || wordCount > 200) {
      enqueueSnackbar('Summary must be between 30 and 300 words.', { variant: 'warning' });
      return;
    }

    const data = {
      title,
      author,
      publishYear,
      summary, // Include summary in the data
    };

    setLoading(true);
    apiClient
      .post('/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error creating book', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4 bg-red-50 min-h-screen pt-16'>
      <BackButton />
      <div className="flex justify-center items-center p-2 md:p-4">
        <h1 className='text-3xl md:text-4xl font-bold text-red-600'>Create Book</h1>
      </div>

      {loading ? <Spinner /> : ''}
      
      <div className='flex flex-col border-2 border-red-400 rounded-xl w-[80%] md:w-[500px] p-2 md:p-4 mx-auto bg-white'>

        <div className='my-2 md:my-4'>
          <label className='text-lg md:text-xl mr-4 text-red-900'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-2 md:px-4 py-1 md:py-2 w-full rounded-md'
          />
        </div>
        <div className='my-2 md:my-4'>
          <label className='text-lg md:text-xl mr-4 text-red-900'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-2 md:px-4 py-1 md:py-2 w-full rounded-md'
          />
        </div>
        <div className='my-2 md:my-4'>
          <label className='text-lg md:text-xl mr-4 text-red-900'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-2 md:px-4 py-1 md:py-2 w-full rounded-md'
          />
        </div>
        <div className='my-2 md:my-4'>
          <label className='text-lg md:text-xl mr-4 text-red-900'>Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className='border-2 border-gray-500 px-2 md:px-4 py-1 md:py-2 w-full h-24 rounded-md'
            placeholder='Enter book summary...'
          />
        </div>
        <button 
          className='p-2 bg-red-500 text-white m-4 md:m-8 rounded-lg hover:bg-red-600 transition-colors'
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
