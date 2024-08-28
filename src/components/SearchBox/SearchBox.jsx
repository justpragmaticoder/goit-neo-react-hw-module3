import css from "./SearchBox.module.css";

const SearchBox = ({ searchRequest, handleChange }) => {
  return (
    <div className={css.contactFind}>
      <label>
        Find contacts by name <br />
        <input
          type="text"
          className={css.input}
          value={searchRequest}
          onChange={handleChange}
          placeholder="Search ..."
        />
      </label>
    </div>
  );
};

export default SearchBox;
