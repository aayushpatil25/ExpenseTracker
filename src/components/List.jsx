function List({ filteredExpenses, deleteExpense, editExpense }) {
  return (
    <div className="space-y-3">
      <h2 className="text-sm uppercase tracking-widest text-slate-400 font-medium">
        Expense List
      </h2>

      {filteredExpenses.length === 0 ? (
        <p className="text-center text-slate-500 text-sm py-8">
          No expenses found.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800 text-slate-400 uppercase text-xs tracking-widest">
                <th className="px-4 py-3 text-left font-medium">Date</th>
                <th className="px-4 py-3 text-left font-medium">Name</th>
                <th className="px-4 py-3 text-left font-medium">Amount</th>
                <th className="px-4 py-3 text-left font-medium">Category</th>
                <th className="px-4 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800">
              {filteredExpenses.map((expense) => {
                return (
                  <tr
                    key={expense.id}
                    className="bg-slate-900 hover:bg-slate-800/60 transition-colors duration-100"
                  >
                    <td className="px-4 py-3 text-slate-400 whitespace-nowrap">
                      {expense.date}
                    </td>
                    <td className="px-4 py-3 text-slate-100 font-medium">
                      {expense.title}
                    </td>
                    <td className="px-4 py-3 text-emerald-400 font-semibold">
                      Rs.{parseFloat(expense.amount).toFixed(2)}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium`}
                      >
                        {expense.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right space-x-2 whitespace-nowrap">
                      <button
                        onClick={() => editExpense(expense.id)}
                        className="text-xs px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 border border-sky-500/20 transition-colors duration-150"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteExpense(expense.id)}
                        className="text-xs px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 border border-rose-500/20 transition-colors duration-150"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default List;
