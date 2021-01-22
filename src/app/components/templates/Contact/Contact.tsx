import styles from './HomePage.module.scss';
import Head from 'next/head';
import Card from '@element/Card/Card';
import React from 'react';
import Image from 'next/image';
import BasicHeading from '@element/BasicHeading/BasicHeading';
import CoursesList from '@element/CoursesList/CoursesList';
import TestimonialCarousel from '@element/TestimonialCarousel/TestimonialCarousel';
import ScrollAnimation from 'react-animate-on-scroll';

const Contact: React.FC = () => {
    let animation = 'fadeIn';
    return (
        <>
            <Head>
                <title>Contact </title>
            </Head>

            <div className="container">

            <h1 className="text-center p-5">Contact</h1>
                <div className="row pb-5">
                    <div className="col-8 offset-2 ">
                        <Card>
                            <div className="row">
                                <div className="col-3">
                                    <Image src={'/madina-2.jpg'} className="img-fluid rounded-circle" width={300} height={300}></Image>
                                </div>
                                <div className="col-9">
                                    <h2>Madina Akhmetkaliyeva</h2>
                                    <p>
                                        <i className="fa fa-phone-alt"></i> +420&nbsp;604650373
                                    </p>
                                    <p>
                                    <i className="fa fa-at"></i> madina.ak@gmail.com
                                    </p>
                                </div>
                            </div>

                        </Card>
                    </div>

                </div>
            </div>



        </>
    )
};

export default Contact;