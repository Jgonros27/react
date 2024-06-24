import { createContext, useState } from "react";

//1º crear contexto
export const FilterContext = createContext();

//2º crear el provider para proveer el contexto
export function FiltersProvider ({children}){

    const [filters, setFilters] = useState({
      category: 'all',
      minPrice: 0
    })

    return (<FilterContext.Provider value={{
        filters,
        setFilters
    }}
    >
        {children}
    </FilterContext.Provider>
    )
}