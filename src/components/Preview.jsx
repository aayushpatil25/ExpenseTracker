

function Preview({ title, amount, category }) {
  const isEmpty = !title && !amount && category === "select";

  return (
    <div className="space-y-4 h-full">
      <h2 className="text-sm uppercase tracking-widest text-slate-400 font-medium">
        Preview
      </h2>

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center h-40 text-slate-600 text-sm gap-2">
          Fill the form to preview your expense
        </div>
      ) : (
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5 space-y-4">
          {/* Name */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">
              Name
            </p>
            <p className="text-lg font-semibold text-slate-100">
              {title || <span className="text-slate-500 italic">Untitled</span>}
            </p>
          </div>

          <div className="w-full h-px bg-slate-700" />

          {/* Amount */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">
              Amount
            </p>
            <p className="text-2xl font-bold text-emerald-400">
              {amount ? `Rs.${parseFloat(amount).toFixed(2)}` : (
                <span className="text-slate-500 text-lg font-normal italic">—</span>
              )}
            </p>
          </div>

          <div className="w-full h-px bg-slate-700" />

          {/* Category */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">
              Category
            </p>
            {category !== "select" ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-slate-600 bg-slate-800 text-slate-400">
                {category}
              </span>
            ) : (
              <span className="text-slate-500 italic text-sm">Not selected</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Preview;