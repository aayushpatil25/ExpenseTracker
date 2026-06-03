function Form({
  title,
  setTitle,
  amount,
  setAmount,
  category,
  setCategory,
  addExpense,
}) {
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

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="select" disabled>
          — Category —
        </option>

        <option value="food">Food and Dining</option>
        <option value="groceries">Groceries</option>
        <option value="transportation">Transportation</option>
        <option value="travel">Travel</option>
        <option value="entertainment">Entertainment</option>
        <option value="shopping">Shopping</option>
        <option value="bills">Bills & Utilities</option>
        <option value="rent">Rent / Housing</option>
        <option value="health">Health</option>
        <option value="education">Education</option>
        <option value="subscriptions">Subscriptions</option>
        <option value="investment">Investment</option>
        <option value="emi">EMI / Loans</option>
        <option value="fitness">Fitness</option>
        <option value="personal">Personal Care</option>
        <option value="gifts">Gifts</option>
        <option value="business">Business</option>
        <option value="other">Other</option>
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
