import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import FaqData from '../static/FaqData';

const FaqItem = ({ question, answer, current }) => {
  const [showItem, setShowItem] = useState(false);

  const indexes = FaqData.map((data, index) => index);
  const currentItem = indexes.find((item) => item === current);

  const toggleShowItem = () => {
    setShowItem((prev) => !prev);
  };

  return (
    <div className='my-4 md:my-8 duration-500'>
      <p
        className={`text-lg cursor-pointer mb-2 flex items-center justify-between ${
          showItem
            ? 'text-purple-600  font-bold'
            : 'text-gray-800 font-semibold'
        }`}
        onClick={toggleShowItem}
      >
        {question}
        <span>{showItem ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </p>
      {showItem && currentItem === current && (
        <p className='bg-gray-50 p-4'>{answer}</p>
      )}
    </div>
  );
};

export default FaqItem;
