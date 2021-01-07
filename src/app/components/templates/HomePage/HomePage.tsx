import styles from './HomePage.module.scss';
import Head from 'next/head';
import Card from '@element/Card/Card';
import React from 'react';
import Image from 'next/image';
import BasicHeading from '@element/BasicHeading/BasicHeading';
import CoursesList from '@element/CoursesList/CoursesList';
import TestimonialCarousel from '@element/TestimonialCarousel/TestimonialCarousel';
import ScrollAnimation from 'react-animate-on-scroll';

const HomePage: React.FC = () => {
  let animation = 'fadeIn';
  return (
    <>
      <Head>
        <title>ResidencyDatabase.online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <Image src={'/hospital.jpg'} alt="hospital" className={styles.cover} unsized={true}></Image>

        <div className="container d-flex align-items-center">
          <div className="row">
            <div className="col-md-12 col-lg-8 offset-lg-2">
              <div className={styles.jumbo}>
                <div className="row p-3">
                  <div className="col-12 col-md-3 text-center">
                    <i className="fal fa-lightbulb-on fa-fw fa-2x mt-4 mb-4" />
                  </div>
                  <div className="col-12 col-md-9 text-center">
                    Don't waste time and money and only apply for relevant programs to you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">


        <ScrollAnimation animateOnce={true} animateIn={animation}>
          <div className="pt-5">
            <h2>
              ResidencyDatabase is set of Excel sheets you use when looking for medical residency. You will be able to quickly find out what is best for your profile.
        </h2>

          </div>
        </ScrollAnimation>

        <ScrollAnimation animateOnce={true} animateIn={animation}>
          <BasicHeading>What's inside</BasicHeading>
          <Card>
            <div className="row d-none-lg">
              <div className="col-12 col-lg-6">
                <ul>
                  <li><i className="fal fa-badge-check" /> Number of percent IMG applicants </li>
                  <li><i className="fal fa-badge-check" /> Minimum Step 1 &amp; Step 2 Score</li>
                  <li><i className="fal fa-badge-check" /> City &amp; Address</li>
                </ul>
              </div>
              <div className="col-12 col-lg-6">

                <ul>
                  <li><i className="fal fa-badge-check" /> Salary and number of sick days </li>
                  <li><i className="fal fa-badge-check" /> Working hours</li>
                  <li><i className="fal fa-badge-check" /> Number of positions filled every year</li>
                </ul>

              </div>
            </div>

          </Card>
        </ScrollAnimation>

        <ScrollAnimation animateOnce={true} animateIn={animation}>
          <BasicHeading>Our happy customers</BasicHeading>
          <TestimonialCarousel></TestimonialCarousel>

          <div className="row">
            <div className="col-12 offset-md-2 col-md-8">

            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-12 col-lg-8 offset-lg-2">
              <Card>
                <div className="row mb-4">
                  <div className="col-4">
                    <Image src={'/dollar-icon.png'} width={200} loading='lazy' height={200} alt="click here to download sample of Residency Database" ></Image>
                  </div>
                  <div className="col-8">
                    <h2 className="pt-4">Pay for only what you will use</h2>
                    <p>
                      You can pick only relevant database for your speciality
            </p>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-4">
                    <Image src={'/money-back.svg'} width={200} loading='lazy' height={200} alt="click here to download sample of Residency Database" ></Image>
                  </div>
                  <div className="col-8">
                    <h2 className="pt-4">Money back guarantee</h2>
                    <p>
                      If you dont like what you got we will refund your payment, not questions asked. Thats our policy
              </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn={animation}>


          <BasicHeading>Free giveaway</BasicHeading>

          <div className="row">
            <div className="col-md-12 col-lg-8 offset-lg-2">
              <Card className="text-center">

                <p>3 days in each month we are giving one speciality away, come back and see if you are lucky. </p>
                <p>No give away at the moment, it was
                <i>              15 </i>
  days since last free giveaway. Come back tomorrow</p>

                <p className="mr-2">Share it with a friend:
              <i className="fab fa-facebook m-2"></i>
                  <i className="fab fa-twitter m-2"></i>
                  <i className="fab fa-whatsapp m-2"></i>
                  <i className="fab fa-linkedin m-2"></i>
                </p>
              </Card>
            </div>
          </div>


        </ScrollAnimation>

        <ScrollAnimation animateOnce={true} animateIn={animation}>
          <BasicHeading>Give it a try</BasicHeading>
          <div className="row">
            <div className="col-md-12 col-lg-8 offset-lg-2">
              <Card className="d-flex align-items-center">
                <div className="w-30">
                  <Image src={'/excel-icon.png'} width={200} loading='lazy' height={200} alt="click here to download sample of Residency Database" ></Image>
                </div>
                <div className="w-70">
                  <p>Check for youeself how the database looks like</p>
                  <button className="btn btn-primary btn-lg mt-1">
                    Download sample
            </button>
                </div>
              </Card>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateOnce={true} animateIn={animation}>
          <div className="mt-5">

            <BasicHeading>Available sheets</BasicHeading>
            {/* <BasicHeading>From our blog</BasicHeading> */}
            <CoursesList></CoursesList>

          </div>
        </ScrollAnimation>
      </div>
    </>
  )
}

  ;

export default HomePage;
