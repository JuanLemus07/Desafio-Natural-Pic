/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useContext, useState } from 'react'
import MyContext from '../Context/MyContext';
import Card from 'react-bootstrap/Card';
import { BsHeartFill, BsHeart } from "react-icons/bs";

const CardImg = ({ datImg, index }) => {
  const [isLiked, setIsLiked] = useState(datImg.liked);
  const { images, setImages } = useContext(MyContext);
  const addFavorite = (e) => {
    e.preventDefault();
    const modfLiked = images;
    modfLiked[index].liked = !modfLiked[index].liked;
    setIsLiked(datImg.liked);
    console.log(isLiked)
    setImages(modfLiked);
  };

  return (
    
    <Card className='card-natural' style={{ width: '15rem' }}>
      <Card.Img   style={{ width: '15rem', height: '15rem' }} src={datImg.src.medium} alt="Card image"/>
      <Card.Body>
      <Card.Title className='text-title'>{datImg.photographer}</Card.Title>
        {isLiked ? (
          <BsHeartFill onClick={addFavorite} />
        ) : (
          <BsHeart onClick={addFavorite} />
        )}
      </Card.Body>
    </Card>
  )}
export default CardImg
