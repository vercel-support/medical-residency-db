import styles from './CourseCard.module.scss';
import Card from '../Card/Card';
import Image from 'next/image';

type Props = {
    name: string;
    pictureUrl: string;
    testimonialText: string;
    rating: number;
    almaMater: string;
    graduatedYear: number;
    location: string;
};

const TestimonialCard: React.FC<Props> = (props: Props) => (
    <Card>
        <div className="row">
            <div className="col-4">

                <img src={props.pictureUrl}
                    className="img-fluid rounded-circle"
                    alt={`${props.name}'s testemonial about ResidencyDatabase.online`} />
                <div className="text-center pt-4">
                    {[0, 1, 2, 3, 4].map(f => <i className="fa fa-star" />)}
                </div>
            </div>



            <div className="col-8">
                <h3>{props.name}</h3>
                <p>{props.testimonialText}</p>
                <small className="text-muted">{props.almaMater}, graduated {props.graduatedYear}</small>
                <small className="text-muted">{props.location}</small>
            </div>
        </div>
    </Card>
);

export default TestimonialCard;