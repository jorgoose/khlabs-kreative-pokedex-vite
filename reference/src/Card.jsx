// props validation
import PropTypes from 'prop-types';

const Card = ({ name, description, imageUrl, color }) => {
    return (
      <li
        style={{
          backgroundColor: color,
        }}
        className='flex w-64 flex-col items-center justify-center rounded p-4 shadow-md'>
        <img className='h-64' src={imageUrl} alt={name} />
        <h3 className='text-3xl'>{name}</h3>
        <p className='text-xl'>{description}</p>
      </li>
    );
  };

  Card.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    };
  
  export default Card;
  