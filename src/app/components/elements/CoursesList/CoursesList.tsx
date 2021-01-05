import styles from './CourseCard.module.scss';
import CourseCard from './../CourseCard/CourseCard';



const CoursesList: React.FC = () => {

    let courses = [
        { name: 'Physical Medicine and Rehabilitation', id: 'yadla', price: 20 },
        { name: 'Neurological Surgery', id: 'yadla', price: 20 },
        { name: 'Internal Medicine Preliminary', id: 'yadla', price: 20 },
        { name: 'Plastic Surgery Integrated', id: 'yadla', price: 20 },
        { name: 'Child Neurology', id: 'yadla', price: 20 },
        { name: 'Emergency Medicine', id: 'yadla', price: 20 },
        { name: 'Radiology Diagnostic', id: 'yadla', price: 20 },
        { name: 'Dermatology', id: 'yadla', price: 20 },
        { name: 'Neurology', id: 'yadla', price: 20 },
        { name: 'Pediatrics', id: 'yadla', price: 20 },
        { name: 'Anesthesiology', id: 'yadla', price: 20 },
        { name: 'Surgery General Categorical', id: 'yadla', price: 20 },
        { name: 'Radiation Oncology', id: 'yadla', price: 20 },
        { name: 'Internal Medicine Pediatrics', id: 'yadla', price: 20 },
        { name: 'Psychiatry', id: 'yadla', price: 20 },
        { name: 'Surgery General Preliminary', id: 'yadla', price: 20 },
        { name: 'Orthopaedic Surgery', id: 'yadla', price: 20 },
        { name: 'Internal Medicine Categorical', id: 'yadla', price: 20 },
        { name: 'Pathology Anatomic Clinical', id: 'yadla', price: 20 },
        { name: 'Thoracic Surgery Integrated', id: 'yadla', price: 20 },
        { name: 'Interventional Radiology Integrated', id: 'yadla', price: 20 },
        { name: 'Transitional Year', id: 'yadla', price: 20 },
        { name: 'Family Medicine', id: 'yadla', price: 20 },
        { name: 'Obstetrics And Gynecology', id: 'yadla', price: 20 },

    ];

    return (
        <div className="row">
            {courses.map((f, index) => <div key={index} className="col-12 col-lg-6 mb-4"><CourseCard name={f.name} id={f.id} price={f.price}></CourseCard></div>)}
        </div>
    )
};

export default CoursesList;
