import './index.scss'
import { useState } from "react"
import type IProduct from "../../interfaces/product"

interface PopUpProps {
    selectedProduct: IProduct | null
    setSelectedProduct: (product: IProduct | null) => void
}

const PopUp = ({ selectedProduct, setSelectedProduct }: PopUpProps) => {
    const [quantity, setQuantity] = useState<number>(1);
    const handleClose = () => {
        setSelectedProduct(null);
        setQuantity(1);
    }

    return (
        <>
            {selectedProduct && (
                <div className="popup" role="dialog" aria-modal="true" aria-labelledby="popup-content-info">
                    <div className="popup-content">
                        <button id="close" type="button" onClick={handleClose}>x</button>
                        <img src={selectedProduct.photo} alt={selectedProduct.productName} />
                        <div className="popup-content-info">
                            <h2>{selectedProduct.productName}</h2>
                            <p id="price">R$ {selectedProduct.price.toFixed(2)}</p>

                            <div className="popup-content-info-description">
                                <p>{selectedProduct.descriptionShort}</p>
                                <a>Veja mais detalhes do produto &#8250;</a>
                            </div>

                            <div className="actions">
                                <div className="range">
                                    <button type="button" aria-label="Diminuir quantidade" onClick={() => setQuantity(q => q != 0 ? Math.max(1, q - 1) : 1)}>-</button>
                                    <span>{quantity}</span>
                                    <button type="button" aria-label="Aumentar quantidade" onClick={() => setQuantity(q => q + 1)}>+</button>
                                </div>
                                <button className="buy" onClick={handleClose}>Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PopUp;