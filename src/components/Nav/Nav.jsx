import SearchBar from "../SearchBar/SearchBar";
export default function Nav(props) {
    const { onSearch } = props;
    return (
        <div>
            <SearchBar onSearch={onSearch} />
        </div>
    );
}


