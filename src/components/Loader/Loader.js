import { BallTriangle } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const sizes = {
  sm: 16,
  md: 24,
  lg: 32,
};

export const Loader = ({ size = 'md' }) => {
  return (
    <BallTriangle
      height={sizes[size]}
      width={sizes[size]}
      color="black"
      ariaLabel="loading"
    />
  );
};
