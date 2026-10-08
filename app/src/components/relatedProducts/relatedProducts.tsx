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

const RelatedProducts = () => {
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
        <main className="related-products">
            <div className="titulo">
                <div className="linha"></div>
                <h1>Produtos Relacionados</h1>
                <div className="linha"></div>
            </div>
            <nav>
                {relatedProductsOptions.map((option) => (
                    <button 
                        key={option} 
                        onClick={() => setSelectedOption(option)} 
                        className={option === selectedOption ? 'active' : ''}
                    >
                        {option}
                    </button>
                ))}
            </nav>
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
                {data?.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.photo} alt={product.productName} />
                        <h2>{product.productName}</h2>
                        {/* <p>{product.descriptionShort}</p> */}
                        <div className="price">
                            <p>R$ {product.price.toFixed(2)}</p>
                            <p>ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros</p>
                            <span className="free-shipping">Frete grátis</span>
                        </div>
                        <button className="buy">Comprar</button>
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
        </main>
    )
}

export default RelatedProducts