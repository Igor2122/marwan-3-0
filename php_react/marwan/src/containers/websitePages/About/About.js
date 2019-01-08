import React from 'react';
import VideoDiv from  '../../../components/Landing/backgroundVideoDiv/backgroundVideoDiv';
import PersonalStatementDiv from '../../../components/Landing/personalStatementDiv/PersonalStatementDiv'
import InstaImgageGrid from '../../ImgGrid/ImgGrid';

const about = (props) => {

  return (
    <div>
        <VideoDiv  />
        <PersonalStatementDiv />
        <InstaImgageGrid />
    </div>
  );
}

export default about;