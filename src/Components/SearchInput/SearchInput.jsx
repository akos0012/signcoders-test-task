import "./SearchInput.css";

const SearchInput = ({ value, onChange, placeholder }) => (
    <input
        className="search-input"
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
    />
);

export default SearchInput;