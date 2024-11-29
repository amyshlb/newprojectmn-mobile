import axios from "axios";
import { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";
import allIcon from "../assets/images/all.svg";
import LoadingRow from "../components/LoadingRow";
function NewsCategoriesPage () {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchCategories() {
            try{
                setIsLoading(true);
                const response = await axios.get('https://f270d956cd644a13.mokky.dev/category');
                setCategories(response.data);
            } catch(e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCategories();
    }, []);

    return (
        <section className="mobile-block">
            <div className="container">
                <h1 className="title">Барлық категориялар</h1>
                {isLoading ? (
                    <LoadingRow />
                ) : (
                    <div className="category-list">
                        <Link to="/" className="category-list__item">
                            <img className="category-list__icon" src={allIcon} alt="Name" />
                            <strong className="category-list__name">Барлығы</strong>
                        </Link>
                        {categories.map((category) => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                ) }
         
            
            </div>
        </section>
    );
}

export default NewsCategoriesPage;