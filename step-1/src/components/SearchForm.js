import React from 'react';

const SearchForm = ({ query, handle_query, set_query }) => {
  return (
    <>
      <div className="p-1 bg-danger text-white">
        <h3 className="pl-2 pt-1">Search Contact</h3>
      </div>
      <form onSubmit={handle_query}>
        <div className="mt-3 row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Search"
              value={query}
              onChange={(e) => set_query(e.target.value)}
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-danger">
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchForm;