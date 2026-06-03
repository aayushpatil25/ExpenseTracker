function Form({ title, setTitle, amount, setAmount, category, setCategory, addExpense }) {
  const inputClass =
    "w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition";

  return (
    <div className="space-y-4">
      <h2 className="text-sm uppercase tracking-widest text-slate-400 font-medium">
        New Expense
      </h2>

      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Expense name"
        onKeyDown={(e) => e.key === "Enter" && addExpense()}
        className={inputClass}
      />

      <input
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        type="number"
        placeholder="Amount (Rs.)"
        className={inputClass}
      />

      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        className={`${inputClass} cursor-pointer`}
      >
        <option value="select" disabled>— Category —</option>
        <option value="food">Food</option>
        <option value="transportation">Transportation</option>
        <option value="entertainment">Entertainment</option>
      </select>

      <button
        onClick={addExpense}
        className="w-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors duration-150 tracking-wide"
      >
        + Add Expense
      </button>
    </div>
  );
}

export default Form;