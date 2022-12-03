import React from 'react'

const Product = ({ precio, descripcion, titulo, stock, categoria, imagen, codigo }) => {

    return(

        <div className="product">

            <div className="image">
                <img src={ imagen } alt="" />
            </div>

            <div className="product-body">
                <h2>{ titulo }</h2>
                <ul>
                    <li>Código: { codigo }</li>
                    <li>Stock: { stock }</li>
                    <li>categoría: { categoria }</li>
                    <li>descripción: { descripcion }</li>
                    <li>Precio: { precio }</li>
                </ul>

            </div>

            <div className="product-footer">
                <button>Agregar al carrito</button>
            </div>

        </div>

    )
    
}

export { Product }