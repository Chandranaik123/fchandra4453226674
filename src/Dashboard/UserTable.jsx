import React from 'react';

const UserTable = ({ userData }) => {
  // console.log(userData)
  if (!userData || userData.length === 0) {
    return <div>No user data available</div>;
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {userData.map((user) => (
  <tr key={user._id}>
    <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
    <td className="px-6 py-4 whitespace-nowrap">{user.rno}</td>
    <td className="px-6 py-4 whitespace-nowrap">{user.cource}</td>
    <td className="px-6 py-4 whitespace-nowrap">{user.batch}</td>
    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
    <td className="px-6 py-4 whitespace-nowrap">{user.address}</td>
  </tr>
 
))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
