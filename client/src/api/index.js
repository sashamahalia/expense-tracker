import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9000/api',
})

export const insertExpense = payload => api.post(`/expense`, payload);
export const getAllExpenses = () => api.get(`/expenses`);
export const deleteExpenseById = id => api.delete(`/expense/${id}`);

const apis = {
  insertExpense,
  getAllExpenses,
  deleteExpenseById,
}

export default apis