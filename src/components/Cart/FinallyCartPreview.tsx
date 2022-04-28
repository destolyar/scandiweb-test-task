import React from "react";
import { CartContext } from "../../context/CartContext";
import { FinallyCartPreviewProps, FinallyCartPreviewState } from "../../entites/interfaces/components/finally-cart-preview";
import '../../styles/components/finally-cart-preview.scss'


export class FinallyCartPreview extends React.Component<FinallyCartPreviewProps, FinallyCartPreviewState> {
  static contextType = CartContext

  state = {
    galleryPictureNumber: 0
  }

  render() {
    const {increaseAmountOfProduct, decreaseAmountOfProduct} = this.context
    return(
      <div className="cart-item__finally-cart-preview">
        <div className="cart-item__finally-cart-preview__amount">
          <div className="cart-item__finally-cart-preview__amount__change-amount" 
          onClick={() => increaseAmountOfProduct(this.props.productName)}><p>+</p></div>
          <div className="cart-item__finally-cart-preview__amount__value">{this.props.productAmount}</div>
          <div className="cart-item__finally-cart-preview__amount__change-amount" 
          onClick={() => decreaseAmountOfProduct(this.props.productName)}><p>&#8722;</p></div>
        </div>
        <div className="cart-item__finally-cart-preview__gallery">
          <img className="cart-item__finally-cart-preview__gallery__image" src={this.props.gallery[this.state.galleryPictureNumber]} alt="" />
          <div className="cart-item__finally-cart-preview__gallery__controls">
            <div className="cart-item__finally-cart-preview__gallery__controls__previos-picture" onClick={() => {
              this.setState((state: {galleryPictureNumber: number}) => ({
                galleryPictureNumber: (state.galleryPictureNumber === this.props.gallery.length - 1) ? 0 : ++state.galleryPictureNumber
              }))
            }}>&#10095;</div>
            <div className="cart-item__finally-cart-preview__gallery__controls__next-picture" onClick={() => {
              this.setState((state: {galleryPictureNumber: number}) => ({
                galleryPictureNumber: (state.galleryPictureNumber === 0) ? this.props.gallery.length - 1 : --state.galleryPictureNumber
              }))
            }}>&#10095;</div>
          </div>
        </div>
      </div>
    )
  }
}