import styles from './HomePage.module.scss';
import Head from 'next/head';
import Card from '@element/Card/Card';
import React from 'react';
import Image from 'next/image';
import BasicHeading from '@element/BasicHeading/BasicHeading';
import CoursesList from '@element/CoursesList/CoursesList';
import TestimonialCarousel from '@element/TestimonialCarousel/TestimonialCarousel';

const HomePage: React.FC = () => (
  <>
    <Head>
      <title>ResidencyDatabase.online</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="row">
      <div className="col-md-12 col-lg-8 offset-lg-2">
        <div className={styles.jumbo}>
          <div className="w-30 text-center py-5">
            <i className="fal fa-lightbulb-on fa-fw fa-2x mt-4 mb-4" />
          </div>
          <div className="w-70 pt-3 py-5">
            Don't waste time and money and only apply for relevant programs to you
      </div>
        </div>
      </div>
    </div>
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

    <BasicHeading>Our happy customers</BasicHeading>
    <TestimonialCarousel></TestimonialCarousel>

    <div className="row">
      <div className="col-12 offset-md-2 col-md-8">
        
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 col-lg-8 offset-lg-2">
        <Card>
          <div className="row">
            <div className="col-4">
              <i className="fa fa-badge fa-3x"></i>
            </div>
            <div className="col-8">
              <h2>Pay for only what you will use</h2>
              <p>
                You can pick only relevant database for your specialty
          </p>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <i className="fa fa-badge fa-3x"></i>
            </div>
            <div className="col-8">
              <h2>Money back guarantee</h2>
              <p>
                If you dont like what you got we will refund your payment, not questions asked. Thats our policy
            </p>
            </div>
          </div>
        </Card>
      </div>
    </div>

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
    <BasicHeading>Download sample</BasicHeading>
    <div className="row">
      <div className="col-md-12 col-lg-8 offset-lg-2">
        <Card className="d-flex">
          <div className="w-30">

          </div>
          <div className="w-70">
            <p>Check for youeself how the database looks like</p>
            <button className="btn btn-primary btn-lg">
              Download
          </button>
          </div>
        </Card>
      </div>
    </div>

    <BasicHeading>From our blog</BasicHeading>
    <CoursesList></CoursesList>
  </>
);

export default HomePage;
