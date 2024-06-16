'use client'
import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Skil from './Skil';
import { mainAxios } from '@/axios/mainAxios';

export interface ISkils {
    title: string;
    process: number;
    _id: string;
}

const Skills = () => {
    const [skils, setSkils] = useState<ISkils[]>([])
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1100 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1100, min: 830 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 830, min: 590 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        }
        ,
        mobileSmall: {
            breakpoint: { max: 590, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const handelProjects = () => {
        mainAxios.get('/skils')
            .then((e) => {
                setSkils(e?.data?.message)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        handelProjects()
    }, [])
    return (
        <div className='col-span-12 h-[60vh] md:h-[50dvh] mx-2 my-4 py-2'>
            <Carousel
                className='h-full w-full'
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {skils?.map((ele) => {
                    return (
                        <Skil item={ele} key={ele?._id} />
                    )
                })}
            </Carousel>
        </div>
    );
};

export default Skills;