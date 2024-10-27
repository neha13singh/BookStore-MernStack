import React from 'react';

const BookModal = ({ book, onClose }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white rounded-lg p-6 w-1/3'>
        <h2 className='text-2xl font-bold'>{book.title}</h2>
        <p className='mt-2'><strong>Author:</strong> {book.author}</p>
        <p className='mt-2'><strong>Published Year:</strong> {book.publishYear}</p>
        <p className='mt-2'><strong>Summary:</strong>{book.summary}</p>
        <p>{book.summary || 'No summary available.'}</p>
        <button
          className='mt-4 p-2 bg-blue-500 text-white rounded'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BookModal;
