import { useQuery } from '@tanstack/react-query'
import './index.scss'
import type IProduct from '../../interfaces/product'
import { productsService } from '../../services/products'
import { useRef, useState } from 'react'

const relatedProductsOptions = [
    "celular",
    "acessórios",
    "tablets",
    "notebooks",
    "tvs",
    "ver todos"
]

interface RelatedProductsProps {
    withOptions: boolean;
    setSelectedProduct: (product: IProduct | null) => void;
}

const RelatedProducts = ({ withOptions, setSelectedProduct }: RelatedProductsProps) => {
    const [selectedOption, setSelectedOption] = useState<string>(relatedProductsOptions[0])

    const carouselRef = useRef<HTMLDivElement>(null)
    
    const { data } = useQuery<IProduct[]>({
        queryKey: ['relatedProducts'],
        queryFn: () => productsService.getProducts()
    })

    const scrollCarousel = (direction: 'left' | 'right') => {
        carouselRef.current?.scrollBy({
            left: direction === 'right' ? 320 : -320,
            behavior: 'smooth'
        })
    }

    return (
        <section className="related-products">
            <div className="titulo">
                <div className="linha"></div>
                <h2>Produtos Relacionados</h2>
                <div className="linha"></div>
            </div>
            {
                withOptions ? (
                    <nav>
                        <ul>
                            {relatedProductsOptions.map((option) => {
                                const isActive = option === selectedOption;

                                return (
                                    <li>
                                        <button 
                                            key={option} 
                                            onClick={() => setSelectedOption(option)} 
                                            type="button"
                                            className={isActive ? 'active' : ''}
                                            aria-pressed={isActive}
                                        >
                                            {option}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                ) : (
                    <a id="ver-todos" href="#">Ver todos</a>
                )
            }
            <div className="carousel-wrapper">
                <button
                    className="carousel-control carousel-control-left"
                    type="button"
                    aria-label="Ver produtos anteriores"
                    onClick={() => scrollCarousel('left')}
                >
                    &#8249;
                </button>
                <div className="carrousel" ref={carouselRef}>
                {data?.map(product => (
                    <div key={product.productName} className="product-card">
                        <img src={product.photo} alt={product.productName} />
                        <h2>{product.productName}</h2>
                        {/* <p>{product.descriptionShort}</p> */}
                        <div className="price">
                            <p>R$ {product.price.toFixed(2)}</p>
                            <p>ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros</p>
                            <span className="free-shipping">Frete grátis</span>
                        </div>
                        <button className="buy" onClick={() => setSelectedProduct(product)}>Comprar</button>
                    </div>
                ))}
                </div>
                <button
                    className="carousel-control carousel-control-right"
                    type="button"
                    aria-label="Ver próximos produtos"
                    onClick={() => scrollCarousel('right')}
                >
                    &#8250;
                </button>
            </div>
        </section>
    )
}

export default RelatedProducts