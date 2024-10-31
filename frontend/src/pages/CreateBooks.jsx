import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
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
    axios
      .post('http://localhost:8080/books', data)
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
    <div className='p-4 bg-red-50'>
      <BackButton />
      <div className="flex justify-center items-center p-4">
      <h1 className='text-4xl font-bold text-red-600'>Create Book</h1>
</div>
      
      {loading && <Spinner />}
      <div className='flex flex-col border-2 border-red-400 rounded-xl w-[600px] p-4 mx-auto bg-white'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-red-900'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-red-900'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-red-900'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-red-900'>Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full h-32'
            placeholder='Enter a summary of 100-300 words...'
          />
        </div>
        <button
          className='p-2 bg-red-500 m-8'
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
