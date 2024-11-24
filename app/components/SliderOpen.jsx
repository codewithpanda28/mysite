import { useNavigate } from 'react-router-dom';

const SliderOpen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/slider');
  };

  return (
    <h2 onClick={handleClick}>
      Click to open Slider
    </h2>
  );
};

export default SliderOpen;