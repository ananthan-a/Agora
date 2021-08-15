import React, { useState } from 'react';
import '../Style/LandingPage.css';
import Product from '../Sources/Product.json';
import styled from "styled-components";

const Button = styled.button`
    background-color:  ${(props) => props.IconColor};
    transform: ${(props) => props.IconColor===props.ActiveColor ? "scale(1.35)" : "scale(1)"};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: ${(props) => props.IconColor===props.ActiveColor ? "black solid 2px" : "black solid 1px"};
    margin-left: 15px;
    margin-right: 15px;

    @media (max-width: 500px){
        margin-left: 5px;
        margin-right: 5px;
    }
`;

export default function LandingPageBody(){

    const [BigImage, SetBigImage] = useState("");
    const [ThumbImage, SetThumbImage] = useState("");
    const [ColorImage, SetColorImage] = useState("");
    const [SizeImage, SetSizeImage] = useState("");

    function ThumbNailButtonClicked(data){
        SetBigImage(data);
        SetThumbImage(data);
    }
    
    return(
        <div className="LandingPageBody">
            <div className="LandingPageBodyLeft">
                <div className="LandingPageBodyThumb">
                    {
                        Product.image.map((images) => {
                            return(
                                <div className={ThumbImage==="" ?  (Product.image[0].name===images.name ? "LandingPageBodyThumbImagesActive" : "LandingPageBodyThumbImages") : (ThumbImage===images.name ? "LandingPageBodyThumbImagesActive" : "LandingPageBodyThumbImages")} >
                                    <img src={images.name} onClick={() => ThumbNailButtonClicked(images.name)}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="LandingPageBodyImageAndColor">
                    <div className="LandingPageBodyImage">
                        <img src={BigImage==="" ? Product.image[0].name : BigImage}className="LandingPageBodyIcon"/>
                    </div>
                    <div className="LandingPageBodyColor">
                        <div className="LandingPageBodyColorHead">Colors: </div>
                        {
                            Product.color.map((colors) => {
                                return(
                                    <div>
                                        <Button
                                            IconColor={colors.name}
                                            ActiveColor={ColorImage==="" ? Product.color[0].name : ColorImage}
                                            onClick={() => SetColorImage(colors.name)}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="LandingPageBodyRight">
                <div className="LandingPageBodyRightHead">
                    <div>
                        <div className="LandingPageBodyName">{Product.name.toUpperCase()}</div>
                        <div className="LandingPageBodyType">{Product.type}</div>
                    </div>
                    <div className="LandingPageBodyPrize">USD {Product.prize}$</div>
                </div>
                <div className="LandingPageBodyRating">
                    <span className={Product.rating >= 1 ? "fa fa-star checked" : "fa fa-star unchecked"}></span>
                    <span className={Product.rating >= 2 ? "fa fa-star checked" : "fa fa-star unchecked"}></span>
                    <span className={Product.rating >= 3 ? "fa fa-star checked" : "fa fa-star unchecked"}></span>
                    <span className={Product.rating >= 4 ? "fa fa-star checked" : "fa fa-star unchecked"}></span>
                    <span className={Product.rating >= 5 ? "fa fa-star checked" : "fa fa-star unchecked"}></span>
                </div>
                <div className="LandingPageBodyDiscription">{Product.discription}</div>
                <div className="LandingPageBodyTag">
                    {
                        Product.tag.map((tags) => {
                            return(
                                <div className="LandingPageBodyTagMap">{tags.name}</div>
                            )
                        })
                    }
                </div>
                <div className="LandingPageBodySizeHead">Select Size (UK Size)</div>
                <div className="LandingPageBodySize">
                    {
                        Product.size.map((sizes) => {
                            return(
                                <div>
                                    <button
                                        type="button"
                                        className={SizeImage==="" ? (sizes.name===Product.size[0].name ? "LandingPageBodySizeMapActive" : "LandingPageBodySizeMap") : (sizes.name===SizeImage ? "LandingPageBodySizeMapActive" : "LandingPageBodySizeMap")}
                                        onClick={() => SetSizeImage(sizes.name)}>
                                            {sizes.name}
                                    </button>
                                    <div className={SizeImage==="" ? (sizes.name===Product.size[0].name ? "LandingPageBodySizeUnderlineMapActive" : "LandingPageBodySizeUnderlineMap") : (sizes.name===SizeImage ? "LandingPageBodySizeUnderlineMapActive" : "LandingPageBodySizeUnderlineMap")}></div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="AddToCardAndVisitWebsite">
                    <div><button className="LandingPageBodyAddToCard" onClick={() => alert("Item Added to your card successfully !!!")}>ADD TO CARD</button></div>
                    <div><button className="LandingPageBodyVisitWebsite" onClick={event =>  window.location.href="https://www.openturf.in/"}>VISIT WEBSITE</button></div>
                </div>
            </div>
        </div>
    )
    
}