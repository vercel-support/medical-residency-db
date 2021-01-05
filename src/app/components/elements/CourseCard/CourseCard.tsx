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
        <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary">Buy now</button>
            <div className="pt-2">
                <small className="text-muted">
                {props.price} USD
                </small>
            </div>
        </div>

    </Card>
);

export default CourseCard;