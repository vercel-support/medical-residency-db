import styles from './CourseCard.module.scss';
import Card from './../Card/Card';

type Props = {
    name: string;
    id: string;
    price: number;
};

const CourseCard: React.FC<Props> = (props: Props) => (
    <Card>
        <h2>
            {props.name}
        </h2>
        <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Buy now</button>
            <div>
                {props.price} USD
            </div>
        </div>

    </Card>
);

export default CourseCard;