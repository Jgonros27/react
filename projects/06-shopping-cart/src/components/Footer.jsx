import { useFilters } from "../hooks/useFilters";
import "./Footer.css";

export function Footer() {

  const {filters} = useFilters()


  if (filters.minPrice > 0 || filters.category != "all") {
    return (
      <footer className="footer">
        <h4>
          Showing result with: 
        </h4>
        {filters.minPrice > 0 ? <h5>Minimun price - <span>{filters.minPrice}</span></h5> : ""}
        {filters.category !='all' ? <h5>Category - <span>{filters.category}</span></h5> : ""}
      </footer>
    );
  }
}
