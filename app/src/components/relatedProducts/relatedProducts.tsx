import { useQuery } from '@tanstack/react-query'
import './index.scss'
import './popup.scss'
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
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)
    const [quantity, setQuantity] = useState<number>(1)

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
        <>
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
            </main>

            {selectedProduct && (
                <div className="popup">
                    <div className="popup-content">
                        <button id="close" onClick={() => setSelectedProduct(null)}>x</button>
                        <img src={selectedProduct.photo} alt={selectedProduct.productName} />
                        <div className="popup-content-info">
                            <h1>{selectedProduct.productName}</h1>
                            <p id="price">R$ {selectedProduct.price.toFixed(2)}</p>

                            <div className="popup-content-info-description">
                                <p>{selectedProduct.descriptionShort}</p>
                                <a>Veja mais detalhes do produto &#8250;</a>
                            </div>

                            <div className="actions">
                                <div className="range">
                                    <button onClick={() => setQuantity(q => q != 0 ? Math.max(1, q - 1) : 1)}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity(q => q + 1)}>+</button>
                                </div>
                                <button className="buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default RelatedProducts