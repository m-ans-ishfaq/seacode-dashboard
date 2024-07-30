import { useQuery } from '@tanstack/react-query';

// https://zenquotes.io/api/quotes?mode=random

const fetchQuotes = async () => {
  const response = await fetch('/api/quotes?mode=random');
  if (!response.ok) {
    throw new Error('BAD_NETWORK');
  }
  return response.json();
};

export const useQuotes = () => useQuery({ queryKey: ['quotes'], queryFn: fetchQuotes });