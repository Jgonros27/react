import {  useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters';

export function Filters() {

    const {filters,setFilters} = useFilters()


    const minPriceFilter = useId()
    const categoryFilter = useId()

    const handleChangueMinPrice = (event) =>{
        setFilters(prevState => ({
            ...prevState,
            minPrice:event.target.value
        }))
    }

    const handleChangueCategory = (event) =>{
        setFilters(prevState => ({
            ...prevState,
            category:event.target.value
        }))
    }


    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilter}>Minimun Price</label>
                <input type="range" onChange={handleChangueMinPrice} id={minPriceFilter} min='0' max='1000' value={filters.minPrice}/>
                <label htmlFor="price">{filters.minPrice}</label>
            </div>
            <div>
                <label htmlFor={categoryFilter}>Category</label>
                <select id={categoryFilter} onChange={handleChangueCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                </select>
            </div>
        </section>
    )
}