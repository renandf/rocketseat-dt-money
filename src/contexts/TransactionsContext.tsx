import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'expense';
  value: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  value: number;
  category: string;
  type: 'income' | 'expense';
}

interface TransactionsContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  
    async function fetchTransactions(query?: string) {
      const response = await api.get('transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'DESC',
          q: query,
        }
      })
  
      setTransactions(response.data)
    }

    async function createTransaction(data: CreateTransactionInput) {
      const { description, value, category, type } = data

      const response = await api.post('transactions', {
        description,
        value,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions(state => [response.data, ...state])
    }
  
    useEffect(() => {
      fetchTransactions()
    }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction,
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}