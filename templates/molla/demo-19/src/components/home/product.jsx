import React from 'react';
import { connect } from 'react-redux';

import BaseProduct from '../../features/product/common/base-product';

// import Utils
import { findIndex } from '../../../utils/utils';

class Product extends BaseProduct{
    render(){
        const { product , type = 1 } = this.props;

        return(
            product ?  
            <div className="product">
                <figure className="product-media">
                    { product.discount > 0 ? <span className="product-label label-sale">Sale</span> : '' }
                    { type === 2 && product.new ? <span className="product-label label-new">New</span> : '' }
                    { type === 2 && product.top ? <span className="product-label label-top">Top</span> : '' }

                    { this.showProductImgSection() }

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn() }
                    </div>

                    <div className="product-action product-action-transparent">
                        { this.showAddToCartBtn() }
                    </div>
                </figure>

                <div className="product-body">
                    {
                        type === 1 ?
                        this.showProductCatSection()
                        : ''
                    }
                    { this.showProductName() }
                    { this.showProductPrice( 'Was' ) }
                </div>
            </div> : ''           
        )
    }
}

export const mapStateToProps = ( state, ownprops ) => {
    let wishlist = false;
    if ( findIndex( state.wishlist.list, item => item.id === ownprops.product.id ) !== -1 )
        wishlist = true;
    return {
        wishlist: wishlist
    };
}

export default connect( mapStateToProps )(Product);