function Budget({ budget, balance, budgetInput, setBudgetInput, addBudget }) {
  const isLow = balance < budget * 0.2;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Stats */}
      <div className="flex gap-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-0.5">
            Total Budget
          </p>
          <p className="text-2xl font-semibold text-emerald-400">
            Rs.{budget.toFixed(2)}
          </p>
        </div>

        <div className="w-px bg-slate-700" />

        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-0.5">
            Balance
          </p>
          <p
            className={`text-2xl font-semibold ${
              isLow ? "text-rose-400" : "text-sky-400"
            }`}
          >
            Rs.{balance.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Input + Button */}
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={budgetInput}
          onChange={(e) => setBudgetInput(e.target.value)}
          placeholder="Add to budget..."
          className="w-40 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
        />
        <button
          onClick={addBudget}
          className="bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-150 whitespace-nowrap"
        >
          + Add
        </button>
      </div>
    </div>
  );
}

export default Budget;