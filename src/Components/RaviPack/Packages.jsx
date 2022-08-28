import { useDispatch } from 'react-redux/es/exports';
import PackageBottom from "../Ravi/PackageBottom";
import { useSelector } from 'react-redux/es/exports';
import SearchBar from "../Ravi/SearhBar";
import { useCallback, useState, useEffect } from 'react';
import { getPackageData } from '../Redux/AppRedux/action';
import CompleteData from '../Ravi/CompleteData';
import FetchData from '../Ravi/FetchData';

const Packages = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch();
    const packageData = useSelector((state) => state.AppRedux.data);


    useEffect(() => {
        dispatch(getPackageData());
    }, []);

    const handleClick = useCallback((val) => {
        setQuery(val);
    });

    useEffect(() => {
        if (query === "") {
            setSuggestions([]);
        }
        else {
            let newCountriesSuggestion = packageData.filter((item) => {
                return item.descTitle.toLowerCase().indexOf(query) !== -1 ? true : false;
            })
            setSuggestions(newCountriesSuggestion);
        }
    }, [query]);
    console.log(query);
    // console.log(suggestions);

    return (
        <div>
            <SearchBar onChangeInput={handleClick} />
            {suggestions.length !== 0 && suggestions ? <CompleteData suggestions={suggestions} /> : <FetchData />}
            <PackageBottom />
        </div>
    )
}

export default Packages