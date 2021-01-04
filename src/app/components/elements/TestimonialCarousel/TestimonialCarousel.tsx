import styles from './CourseCard.module.scss';
import TestimonialCard from './../TestimonialCard/TestimonialCard';

type Props = {
    name: string;
    id: string;
    price: number;
};

const TestimonialCarousel: React.FC = () => {

    let courses = [{
        "name": "Nicholas Kessler",
        "testimonialText": "heard about this on gypsy jazz radio, decided to give it a try.",
        "rating": 3.9097391904377097,
        "almaMater": "Shanxi Datong University School of Medicine",
        "graduatedYear": 2020,
        "location": "Cruickshanktown, South Carolina",
        "pictureUrl": "https://loremflickr.com/320/240?lock=288778754"
    }, {
        "name": "Kelli Farrell",
        "testimonialText": "It only works when I'm Niger.",
        "rating": 4.4466779867404505,
        "almaMater": "Universidad Nacional José Faustino Sánchez Carrión Facultad de Medicina Humana",
        "graduatedYear": 2021,
        "location": "Lake Kacie, Rhode Island",
        "pictureUrl": "https://loremflickr.com/320/240?lock=2018903704"
    }, {
        "name": "Gilbert Walker",
        "testimonialText": "I tried to hang it but got jelly bean all over it.",
        "rating": 4.8535828303329565,
        "almaMater": "Universidad de Alicante Facultad de Medicina",
        "graduatedYear": 2018,
        "location": "South Ashlynnfurt, Georgia",
        "pictureUrl": "https://loremflickr.com/320/240?lock=1214184363"
    }, {
        "name": "Louis Dooley",
        "testimonialText": "The box this comes in is 5 kilometer by 5 inch and weights 13 kilogram!!!",
        "rating": 4.364208971552648,
        "almaMater": "University of Benin College of Medical Sciences",
        "graduatedYear": 2020,
        "location": "Sibylburgh, Tennessee",
        "pictureUrl": "https://loremflickr.com/320/240?lock=2056043591"
    }, {
        "name": "Brian Blanda",
        "testimonialText": "I saw one of these in Vanuatu and I bought one.",
        "rating": 4.8847071292738935,
        "almaMater": "Andhra Medical College",
        "graduatedYear": 2018,
        "location": "Mosciskibury, California",
        "pictureUrl": "https://loremflickr.com/320/240?lock=1479047780"
    }, {
        "name": "Guy Cassin",
        "testimonialText": "talk about interest!!",
        "rating": 4.253806962982662,
        "almaMater": "Bannu Medical College",
        "graduatedYear": 2021,
        "location": "Kundeburgh, North Dakota",
        "pictureUrl": "https://loremflickr.com/320/240?lock=509235835"
    }, {
        "name": "Tricia Harris",
        "testimonialText": "The box this comes in is 3 inch by 6 centimeter and weights 15 ounce!",
        "rating": 4.830120028150324,
        "almaMater": "Mulungushi University School of Medicine and Health Sciences",
        "graduatedYear": 2020,
        "location": "DuBuqueburgh, Delaware",
        "pictureUrl": "https://loremflickr.com/320/240?lock=1863909564"
    }, {
        "name": "Jo Kutch",
        "testimonialText": "I saw one of these in Cote d'Ivoire and I bought one.",
        "rating": 3.773914756380913,
        "almaMater": "Universiti Teknologi Mara Faculty of Medicine",
        "graduatedYear": 2019,
        "location": "Lake Imogene, Florida",
        "pictureUrl": "https://loremflickr.com/320/240?lock=411191951"
    }, {
        "name": "Shelly Lind",
        "testimonialText": "I saw one of these in Macau and I bought one.",
        "rating": 3.9488018676400194,
        "almaMater": "Anhui University of Science and Technology College of Medicine",
        "graduatedYear": 2018,
        "location": "Margaretside, Nebraska",
        "pictureUrl": "https://loremflickr.com/320/240?lock=1691108719"
    }, {
        "name": "Maxine Mertz",
        "testimonialText": "this product is tasty.",
        "rating": 4.133377011694655,
        "almaMater": "University of Birmingham College of Medical and Dental Sciences",
        "graduatedYear": 2020,
        "location": "North Cleveland, Minnesota",
        "pictureUrl": "https://loremflickr.com/320/240?lock=626734220"
    }, {
        "name": "Melissa Effertz",
        "testimonialText": "My tiger loves to play with it.",
        "rating": 3.9732936008243325,
        "almaMater": "Dr. Vaishampayan Memorial Medical College",
        "graduatedYear": 2021,
        "location": "Handfort, Arizona",
        "pictureUrl": "https://loremflickr.com/320/240?lock=841214072"
    }, {
        "name": "Jaime Schulist",
        "testimonialText": "My dog loves to play with it.",
        "rating": 4.8630920869126415,
        "almaMater": "Spinghar Institute of Higher Education, Nangarhar",
        "graduatedYear": 2019,
        "location": "South Emeraldton, Hawaii",
        "pictureUrl": "https://loremflickr.com/320/240?lock=1132314510"
    }, {
        "name": "Lionel Harber",
        "testimonialText": "I tried to nab it but got biscuit all over it.",
        "rating": 3.7999587893951494,
        "almaMater": "Sylhet Women's Medical College and Hospital",
        "graduatedYear": 2017,
        "location": "Hirthechester, Alaska",
        "pictureUrl": "https://loremflickr.com/320/240?lock=1552982071"
    }, {
        "name": "Angela Zulauf",
        "testimonialText": "This product works considerably well. It recklessly improves my basketball by a lot.",
        "rating": 4.3400586165208646,
        "almaMater": "HITEC Institute of Medical Sciences",
        "graduatedYear": 2019,
        "location": "Carterside, Virginia",
        "pictureUrl": "https://loremflickr.com/320/240?lock=93276244"
    }];

    return (
        <div className="row">

            <div className="col-1">
            <i className="fa fa-chevron-left fa-4x"></i>
            </div>
            {courses.map(f => <div className="col-10"><TestimonialCard  {...f}></TestimonialCard></div>)}
            <div className="col-1">
            <i className="fa fa-chevron-right fa-4x"></i>
            </div>
        </div>
    )
};

export default TestimonialCarousel;
