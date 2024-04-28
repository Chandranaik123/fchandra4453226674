import React, { useState } from 'react';
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { lusers } from './fetchAPI/List';
import UserTable from './UserTable';
import Form from './Form';
import DeleteForm from './DeleteForm';

function Dashboard() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState('List All Users');
  const [userData, setUserData] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    alert("You're logged out!!");
    navigate('/');
  };

  const handleAddProduct = async () => {
    await handleAction(selectedAction);
  };

  const toggleDropdown = (dropdownId) => {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('hidden');
  };

  const handleActionSelect = (action) => {
    setSelectedAction(action);
    toggleDropdown('actionsDropdown');
  };

  const handleAction = async (action) => {
    switch (action) {
      case 'Add':
       console.log("Adding ")
      
        break;
      case 'Delete':
        console.log("Performing delete action...");
       
        break;
      case 'List All Users':
      
        const data = await lusers();
        setUserData(data);
        
        break;
      case 'Update':
        alert("Performing update action...");
        break;
      default:
        alert("Unknown action...");
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900  flex justify-center m-6">
        <div className="max-w-screen-xl mx-auto lg:px-12 w-full my-5">
          <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">Search</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" id="simple-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                  </div>
                </form>
              </div>
              <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                <button 
                  type="button" 
                  onClick={handleAddProduct} 
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                  <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                  </svg>
                  {selectedAction}
                </button>
                <div className="relative inline-block text-left">
                  <button 
                    id="actionsDropdownButton" 
                    onClick={() => toggleDropdown('actionsDropdown')} 
                    className="flex items-center justify-center w-full md:w-auto px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    type="button"
                  >
                    <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                    Actions
                  </button>
                  <div 
                    id="actionsDropdown" 
                    className="z-10 hidden origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                      <li>
                        <button onClick={() => handleActionSelect('Add')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add</button>
                      </li>
                      <li>
                        <button onClick={() => handleActionSelect('Delete')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</button>
                      </li>
                      <li>
                        <button onClick={() => handleActionSelect('List All Users')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">List All Users</button>
                      </li>
                      {/* <li>
                        <button onClick={() => handleActionSelect('Update')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Update</button>
                      </li> */}
                    </ul>
                  </div>
                  <button 
        onClick={handleLogout} 
        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 focus:outline-none mt-4 mx-4"
      >
        Logout
      </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {selectedAction === 'List All Users' && userData && (
        <UserTable userData={userData} />
      )}
      {selectedAction === 'Add' &&( <Form />)}
      {selectedAction === 'Delete' &&( <DeleteForm />)}
      {/* <Form/> */}
    </div>
  );
}

export default Dashboard;
