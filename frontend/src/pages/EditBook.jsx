import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { apiClient } from '../utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    apiClient
      .get(`/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setSummary(response.data.summary);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error loading book', { variant: 'error' });
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
      summary,
    };
    setLoading(true);
    apiClient
      .put(`/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error updating book', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4 bg-red-50 min-h-screen pt-16'>
      <BackButton />
      <div className="flex justify-center items-center p-2 md:p-4">
        <h1 className='text-3xl md:text-4xl font-bold text-red-600'>Edit Book</h1>
      </div>
      
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-red-400 rounded-xl w-[90%] md:w-[500px] p-2 md:p-4 mx-auto bg-white'>
        <div className='my-2 md:my-4'>
          <label className='text-lg md:text-xl mr-4 text-red-900'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-2 md:px-4 py-1 md:py-2 w-full'
          />
        </div>
        <div className='my-2 md:my-4'>
          <label className='text-lg md:text-xl mr-4 text-red-900'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-2 md:px-4 py-1 md:py-2 w-full'
          />
        </div>
        <div className='my-2 md:my-4'>
          <label className='text-lg md:text-xl mr-4 text-red-900'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-2 md:px-4 py-1 md:py-2 w-full'
          />
        </div>
        <div className='my-2 md:my-4'>
          <label className='text-lg md:text-xl mr-4 text-red-900'>Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className='border-2 border-gray-500 px-2 md:px-4 py-1 md:py-2 w-full h-24'
          />
        </div>
        <button className='p-2 bg-red-500 m-4 md:m-8 text-white rounded-lg hover:bg-red-600' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditBook;
