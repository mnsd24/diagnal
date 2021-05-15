import React, { useEffect, useState } from 'react'
import LazyLoad from "react-lazyload";
import placeholderImg from '../../assets/icons/placeholder_for_missing_posters.png'
import {
    Poster1,
    Poster2,
    Poster3,
    Poster4,
    Poster5,
    Poster6,
    Poster7,
    Poster8,
    Poster9,
} from '../../constants/images'

const Card = (props) => {

    var [data, setData] = useState({})
    var [searchName, setSearchName] = useState('')

    useEffect(() => {
        setData(props.details)
        setSearchName(props.searchValue)

    }, [props.details, props.searchValue, data, searchName])

    return (
        <div className="example grid grid-flow-row grid-cols-3 gap-4 px-2">
            {data.page && data.page["content-items"].content.map((data, index) => {
                let img = data["poster-image"]
                let compareImg = img === "poster1.jpg" ? Poster1 : img === "poster2.jpg" ? Poster2 :
                    img === "poster3.jpg" ? Poster3 : img === "poster4.jpg" ? Poster4 :
                        img === "poster5.jpg" ? Poster5 : img === "poster6.jpg" ? Poster6 :
                            img === "poster7.jpg" ? Poster7 : img === "poster8.jpg" ? Poster8 :
                                img === "poster9.jpg" ? Poster9 : placeholderImg
                return (
                    <div className={data.name.toLowerCase().includes(searchName) ? "shadow-md  mb-4" : "hidden"} key={data.name + index} >
                        <div className="flex justify-center items-center">
                            {/* <LazyLoadImage
                                alt={placeholderImg}
                                effect="black-and-white"
                                src={compareImg}
                            /> */}
                            <LazyLoad>
                                <img
                                    alt={placeholderImg}
                                    src={compareImg}
                                />
                            </LazyLoad>
                        </div>
                        <div className=" text-left pt-2">
                            <p className="text-white font-light text-xs overflow-clip	 overflow-hidden">
                                {data.name}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}
export default Card;
