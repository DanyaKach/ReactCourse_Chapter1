import { useState, useEffect } from 'react';
import useLoader from './useLoader';

const useGetAllToDo = () => {
  const [toDoL, setToDoL] = useState([]);
  const [error, setError] = useState(null);
  const { isLoading, setIsLoading } = useLoader(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        setToDoL(result); 
        console.log('Fetched Data:', result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error); 
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, [setIsLoading]);

  return { toDoL, isLoading, error, setToDoL };
};

export default useGetAllToDo;
