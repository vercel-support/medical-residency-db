import styles from './TestimonialCarousel.module.scss';
import TestimonialCard from './../TestimonialCard/TestimonialCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

type Props = {
    name: string;
    id: string;
    price: number;
};

const TestimonialCarousel: React.FC = () => {

    let courses =[
        {
          "name": "Lisa Pederson",
          "testimonialText": "Easy to use, have all information I needed to choose residency programs",
          "rating": 4.5,
          "almaMater": "Universidad Veracruzana Facultad de Medicina Orizaba-Córdoba,",
          "graduatedYear": 2019,
          "pictureUrl": "https://dl.airtable.com/.attachments/a92101ac5f2422aeb50ab50ee2af570f/6009688d/Clipboard4.jpg",
          "location": "Oslo, Norway"
        },
        {
          "name": "Anika Mukherjee",
          "testimonialText": "I used the IM spread sheet to filter out programs that require higher Step 1 scores, low IMG % and states I didn't want to live in.",
          "rating": 5,
          "almaMater": "A.C.S. Medical College and Hospital",
          "graduatedYear": 2018,
          "pictureUrl": "https://dl.airtable.com/.attachments/730bc7a4f783b038cb659f3747393bb7/78d02d4c/Unknown.jpeg",
          "location": "India"
        },
        {
          "name": "Monica Neff",
          "testimonialText": "As a US-IMG I didn't want to spend much money or time researching residencies. I highly recommend this spreadsheets to help you pick most suitable programs out there.",
          "rating": 5,
          "almaMater": "First Faculty of Medicine, Charles University",
          "graduatedYear": 2020,
          "pictureUrl": "https://dl.airtable.com/.attachments/bfcd44519586078353799dad636e7196/2995ae46/Clipboard.jpg",
          "location": "San Francisco, USA"
        },
        {
          "name": "Arjun Pandey",
          "testimonialText": "I was applied to multiple specialities and this tables helped to focus on residency programs that are IMG friendly, have great working hours, located close to family I have in New Jersey.",
          "rating": 4.5,
          "almaMater": "Deccan College of Medical Sciences",
          "graduatedYear": 2019,
          "pictureUrl": "https://dl.airtable.com/.attachments/653fbb31c4f46bf3f9ff9300d7dbe070/4696d567/Clipboard2.jpg",
          "location": "India"
        },
        {
          "name": "Aliya Kadir",
          "testimonialText": "I decided to apply last min, so had only 2 days to research programs. Thanks to this product I was able to pick successfully residency programs and book over 20 interviews.",
          "rating": 5,
          "almaMater": "Medical School of Astana",
          "graduatedYear": 2020,
          "pictureUrl": "https://dl.airtable.com/.attachments/5ebdfa1a165376ae8aebc482134cfe61/905ae874/Clipboard3.jpg",
          "location": "Oskemen, Kazakhstan"
        },
        {
          "name": "Ishwari Samir",
          "testimonialText": "Thank you for organising all the information in the tables, that are easy to use and for such an affordable price.",
          "rating": 5,
          "almaMater": "Aarupadai Veedu Medical College",
          "graduatedYear": 2019,
          "pictureUrl": "https://dl.airtable.com/.attachments/1af85717e42ad0ee15652efc15f2344d/6c658766/images.jpeg",
          "location": "India"
        },
        {
          "name": "Xuan Baccay",
          "testimonialText": "I used it to find clinical rotations in hospitals where I can apply next year and secure good LOR",
          "rating": 5,
          "almaMater": "Divine Word University School of Medicine (Liceo del Verbo Divino)",
          "graduatedYear": 2020,
          "pictureUrl": "https://dl.airtable.com/.attachments/07f8d580a956c885e216d177dbc5f7d8/4b469716/Unknown.jpeg",
          "location": "Phillipins"
        },
        {
          "name": "Juliane Thumulla",
          "testimonialText": "Made my life much easier!!! Thanks.",
          "rating": 4.5,
          "almaMater": "European Medical School, Carl von Ossietzky Universität Oldenburg",
          "graduatedYear": 2020,
          "pictureUrl": "https://dl.airtable.com/.attachments/e0cb8baf3b146bc89732f08f1ef0abd3/34a3d8e5/Clipboard5.jpg",
          "location": "Hamburg, Germany"
        }
      ];

    return (
        <Carousel autoPlay={true}

            renderArrowPrev={(onClickHandler, active, label) =>
                active && (
                    <div className={styles.leftArrow} onClick={onClickHandler}>
                        <i className="fa fa-chevron-left text-primary fa-3x"  ></i>
                    </div>
                )
            }

            renderArrowNext={(onClickHandler, active, label) =>
                active && (
                    <div className={styles.rightArrow} onClick={onClickHandler}>
                        <i className="fa fa-chevron-right text-primary fa-3x"  ></i>
                    </div>
                )
            }
        >
            {courses.map((f, index) => <div key={index} className="px-5 py-2 pb-4"><TestimonialCard  {...f}></TestimonialCard></div>)}
        </Carousel>
    )
};

export default TestimonialCarousel;
