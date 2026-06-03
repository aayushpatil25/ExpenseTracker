import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Preview from "./components/Preview";
import List from "./components/List";
import FilterBar from "./components/FilterBar";
import Summary from "./components/Summary";
import Budget from "./components/Budget";

import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("select");

  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem("expenses");
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  }, []);

  const [budget, setBudget] = useState(() => {
    const storedBudget = localStorage.getItem("budget");
    return storedBudget ? JSON.parse(storedBudget) : 0;
  });

  const [budgetInput, setBudgetInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addBudget = () => {
    if (!budgetInput) return;
    setBudget((prev) => prev + Number(budgetInput));
    setBudgetInput("");
  };

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [budget]);

  const totalAmount = expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount),
    0,
  );

  const balance = budget - totalAmount;

  const addExpense = () => {
    if (!title.trim() || !amount.trim() || category === "select") return;
    const expenseAmount = Number(amount);
    if (expenseAmount > balance) {
      alert("Not enough budget remaining!");
      return;
    }
    setExpenses((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        amount,
        category,
        date: new Date().toLocaleDateString(),
      },
    ]);
    setTitle("");
    setAmount("");
    setCategory("select");
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const editExpense = (id) => {
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    if (expenseToEdit) {
      setTitle(expenseToEdit.title);
      setAmount(expenseToEdit.amount);
      setCategory(expenseToEdit.category);
      deleteExpense(id);
    }
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Top bar: Header + Budget */}
      <div className="bg-slate-900 border-b border-slate-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Header />
          <div className="mt-4">
            <Budget
              budget={budget}
              balance={balance}
              budgetInput={budgetInput}
              setBudgetInput={setBudgetInput}
              addBudget={addBudget}
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Form + Preview row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-md">
            <Form
              title={title}
              setTitle={setTitle}
              amount={amount}
              setAmount={setAmount}
              category={category}
              setCategory={setCategory}
              addExpense={addExpense}
            />
          </div>
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-md">
            <Preview title={title} amount={amount} category={category} />
          </div>
        </div>

        {/* Filter + List row */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-md space-y-4">
          <div>
            <FilterBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div>
            <List
              filteredExpenses={filteredExpenses}
              deleteExpense={deleteExpense}
              editExpense={editExpense}
            />
          </div>
        </div>
      </div>

      {/* Summary footer */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-slate-900 border border-slate-700/40 rounded-2xl p-6 shadow-md">
          <Summary expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;