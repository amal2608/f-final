import { userInstance } from "../../axios/Userinstance";


export const registerUser = async (values) => {
  try {
    await userInstance.post('/register', { ...values });
  } catch (error) {
    console.error('Error signing up:', error.message);
    throw error;
  }
};
export const loginUser = async ({ email, password }) => {
  try {
    const response = await userInstance.post('/login', { email, password });
    console.log('Login successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.message);
    throw error;
  }
};

export const eventForm = async (values) => {
  try {
    await userInstance.post('/Event', { ...values });
  } catch (error) {
    console.error('Error signing up:', error.message);
    throw error;
  }
};


export const adminLogin = async ({ username, password }) => {
  try {
    const response = await userInstance.post('/adminlogin', { username, password });
    console.log('Login successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.message);
    throw error;
  }
};

export const fetchEnquiries = async () => {
  try {
    const response = await userInstance.get('/enquiries');
    return response.data;
  } catch (error) {
    console.error('Error fetching event enquiries:', error.message);
    throw error;
  }
};


export const deleteEnquiries = async (id) => {
  try {
    const response = await userInstance.delete(`/enquiries/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event enquiries:', error.message);
    throw error;
  }
};

export const updateEvent = async (eventId, updatedEventData) => {
  try {
    const response = userInstance.put(`/events/${eventId}`, updatedEventData);
    return response.data; 
  } catch (error) {
    console.error('Error updating event:', error.message);
    throw error; // Throw the error for handling in the component
  }
};

// export const registerAdmin = async (values) => {
//   try {
//     await userInstance.post('/registeradmin', { ...values });
//   } catch (error) {
//     console.error('Error signing up:', error.message);
//     throw error;
//   }
// };