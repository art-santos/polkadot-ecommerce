import { createContext } from "react";

const FilterContext = createContext({
    filter: "",
    setToFilter: () => void {},
});

export default FilterContext;
