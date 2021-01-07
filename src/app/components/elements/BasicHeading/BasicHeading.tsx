type Props = {
  children: React.ReactNode;
  className?: string;
};

const BasicHeading: React.FC<Props> = ({ children, className }) => (
  <h2 className={className ?? '' + " pt-5 pb-3 text-center"}>{children}</h2>
);

export default BasicHeading;
