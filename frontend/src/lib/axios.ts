import axios from 'axios';



export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error: any) => {
        const message = error.response?.data?.message || error.message;
        console.error(message); // Log the error message or handle it
        // useNotificationStore.getState().addNotification({
        //   type: 'error',
        //   title: 'Error',
        //   message,
        // });

        return Promise.reject(error);
    }
);
