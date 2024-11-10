import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { apiClient } from '../utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    apiClient
      .delete(`/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <div className='p-4 bg-red-50 min-h-screen'>
      <BackButton />
      <h1 className='text-2xl md:text-3xl my-4 text-center text-red-600 font-bold'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-red-400 rounded-xl w-[90%] md:w-[600px] p-4 md:p-8 mx-auto bg-white'>
        <h3 className='text-xl md:text-2xl text-center mb-4'>Are you sure you want to delete this book?</h3>

        <button
          className='p-3 md:p-4 bg-red-600 text-white m-4 md:m-8 w-full max-w-sm rounded-lg hover:bg-red-700 transition-colors'
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook;
