function FilterBar({ setSearchTerm }) {
  return (
    <div>
      <input
                    type="text"
                    placeholder="Search expenses..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
    </div>
  )
}

export default FilterBar
