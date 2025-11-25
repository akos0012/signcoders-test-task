import "./SortButton.css";

const SortButton = ({ isAscending, onClick }) => (
    <button className="sort-button" type="button" onClick={onClick}>
        {isAscending ? "↑" : "↓"}
    </button>
);

export default SortButton;