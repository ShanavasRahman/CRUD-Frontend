import React from 'react';

const DeleteModal = ({ onClose, onConfirm }) => {
    console.log(onClose);
  return (
<div 
  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
  style={{ margin: 0 }}
>      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h3 className="text-xl font-semibold mb-4">Confirm Delete</h3>
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete this user? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
