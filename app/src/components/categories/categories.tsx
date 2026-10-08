import './index.scss'
import { useState } from 'react'
import Tecnologia from '../../assets/categories/tecnologia2.svg'
import Supermercado from '../../assets/categories/supermercados 1.svg'
import Bebidas from '../../assets/categories/whiskey.svg'
import Ferramentas from '../../assets/categories/ferramentas 1.svg'
import Saude from '../../assets/categories/cuidados-de-saude 1.svg'
import Esportes from '../../assets/categories/corrida 1.svg'
import Moda from '../../assets/categories/moda 1.svg'

interface Category {
    name: string
    icon?: string
};

const categories: Category[] = [
    { name: 'Tecnologia', icon: Tecnologia },
    { name: 'Supermercado', icon: Supermercado },
    { name: 'Bebidas', icon: Bebidas },
    { name: 'Ferramentas', icon: Ferramentas },
    { name: 'Saúde', icon: Saude },
    { name: 'Esportes & Fitness', icon: Esportes },
    { name: 'Moda', icon: Moda }
];

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState<Category>(categories[0])

    return (
        <nav className="categories" aria-label="Categorias de produtos">
            <ul>
                {categories.map((category) => {
                    const isActive = category.name === activeCategory.name;

                    return (
                        <li key={category.name}>
                            <button 
                                className={isActive ? 'active' : ''} 
                                onClick={() => setActiveCategory(category)}
                                aria-pressed={isActive}
                            >
                                <div>
                                    <img className="category-icon" src={category.icon} alt="" />
                                </div>
                                <span>
                                    {category.name}
                                </span>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
};

export default Categories;
