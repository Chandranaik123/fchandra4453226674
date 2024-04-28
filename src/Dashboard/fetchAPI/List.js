export const lusers = async () => {
    const baseUrl = import.meta.env.REACT_APP_URL;
    try {
      const response = await fetch(`${baseUrl}/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
  
      const responseData = await response.json();
 
    return responseData;
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };
  
  export const sendServer = async (formData) => {
    const baseUrl = import.meta.env.REACT_APP_URL;
    try {
      const response = await fetch(`${baseUrl}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      return { message: 'Internal Server Error', state: false }; 
    }
  };
  

  
  export const deleteServer = async (formData) => {
    const baseUrl = import.meta.env.REACT_APP_URL;
    try {
      const response = await fetch(`${baseUrl}/user`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      
      return { message: 'User exists', state: false }; 
    }
  };
  

