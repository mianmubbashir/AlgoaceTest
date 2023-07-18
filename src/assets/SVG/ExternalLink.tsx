import React from 'react';
import {Path, Svg} from 'react-native-svg';

function ExternalLink(props: any) {
  const {fill, stroke} = props;
  return (
    <Svg
      // width="24"
      // height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18 13.1047V19.1047C18 19.6352 17.7893 20.1439 17.4142 20.5189C17.0391 20.894 16.5304 21.1047 16 21.1047H5C4.46957 21.1047 3.96086 20.894 3.58579 20.5189C3.21071 20.1439 3 19.6352 3 19.1047V8.10474C3 7.5743 3.21071 7.0656 3.58579 6.69052C3.96086 6.31545 4.46957 6.10474 5 6.10474H11"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15 3.10474H21V9.10474"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 14.1047L21 3.10474"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default ExternalLink;
