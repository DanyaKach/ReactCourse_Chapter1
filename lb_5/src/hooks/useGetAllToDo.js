import { useState, useEffect } from 'react';
import useLoader from './useLoader';

const useGetAllToDo = () => {
  const [toDoL, setToDoL] = useState([]);
  const [error, setError] = useState(null);
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        setToDoL(result);
      } catch (error) {
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
