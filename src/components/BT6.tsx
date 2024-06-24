import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEnglish, setVietnamese } from '../redux/reducer/languageReducer';
import { GlobalOutlined } from '@ant-design/icons';

export default function BT6()  {
  const language = useSelector((state:any) => state.language.language);
  const dispatch = useDispatch();
  const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage === 'en') {
      dispatch(setEnglish());
    } else if (selectedLanguage === 'vi') {
      dispatch(setVietnamese());
    }
  };
  return (
    <div>
    <select value={language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
        {language === 'en' ? (
        <p>Hellooo!</p>
      ) : (
        <p>Xin chàoooooooooooo!</p>
      )}
    </div>
  );
};


