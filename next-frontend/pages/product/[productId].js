import React from 'react';

const ProductDetail = ({productId}) => {
    console.log(productId);
    return (
        <div>
            {productId}
        </div>
    );
};

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    productId: 'p1'
                }
            },
            {
                params: {
                    productId: 'p2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const productId = context.params.productId;
    return {
        props: {
            productId: productId
        }
    }
}

export default ProductDetail;