import React from 'react';
import {Path, Svg} from 'react-native-svg';

const arrowLeft = (props: any) => {
  const {fill, stroke} = props;
  return (
    <Svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19 12.5601H5"
        stroke="#1F2223"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 19.5601L5 12.5601L12 5.56006"
        stroke="#1F2223"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default arrowLeft;
