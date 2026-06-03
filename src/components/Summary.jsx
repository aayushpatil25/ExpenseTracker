
function Summary({ expenses }) {
  const totalExpenses = expenses.length;
  const totalAmount = expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);


  return (
    <div className="space-y-4">
      <h2 className="text-sm uppercase tracking-widest text-slate-400 font-medium">
        Summary
      </h2>

      {/* Top stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-900/60 border border-slate-700 rounded-xl px-5 py-4">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">
            Total Expenses
          </p>
          <p className="text-3xl font-bold text-slate-100">
            {totalExpenses}
            <span className="text-base font-normal text-slate-500 ml-1">
              {totalExpenses === 1 ? "expense" : "expenses"}
            </span>
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-700 rounded-xl px-5 py-4">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">
            Total Spent
          </p>
          <p className="text-3xl font-bold text-emerald-400">
            Rs.{totalAmount.toFixed(2)}
          </p>
        </div>
      </div>

    </div>
  );
}

export default Summary;