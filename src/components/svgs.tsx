import * as React from 'react';
import Svg, {Path, G, Circle} from 'react-native-svg';

interface Props {
  size?: number;
}

export const DocumentEmpty = (props: Props): React.ReactElement => {
  const width = props.size || 195.056;
  const height = (width * 118.834) / 195.056;
  return (
    <Svg width={width} height={height} viewBox="0 0 195.056 118.834">
      <Path
        d="M53.728 99.025a8.155 8.155 0 110-16.31H8.176a8.155 8.155 0 110-16.309H54.9a8.155 8.155 0 100-16.31H25.7a8.155 8.155 0 110-16.309h46.716a8.155 8.155 0 110-16.31H186.88a8.155 8.155 0 110 16.31h-46.72a8.155 8.155 0 110 16.309h25.7a8.155 8.155 0 110 16.31h-11.888c-5.693 0-10.308 3.651-10.308 8.154s7.007 8.155 7.007 8.155a8.155 8.155 0 110 16.31zM178.7 58.25a8.176 8.176 0 118.176 8.155 8.165 8.165 0 01-8.176-8.155z"
        fill="#eff3fc"
      />
      <Path
        d="M132.366 108.469l-68.398 8.378a4.675 4.675 0 01-5.208-4.058L48.23 27.246a2.334 2.334 0 012.035-2.597l.023-.002 5.675-.635 4.589-.515 3.294-.368 60.747-6.82 10.864 79.038.974 7.93a4.668 4.668 0 01-4.065 5.192z"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeWidth={2.5}
        stroke="#8dbbf2"
        fill="#fff"
      />
      <Path
        d="M121.635 21.284l9.836 71.629.882 7.186a4.2 4.2 0 01-3.636 4.7L67.464 112.3a4.207 4.207 0 01-4.667-3.684l-9.52-77.328a2.331 2.331 0 012.035-2.597l7.577-.93"
        fill="#e8f0fe"
      />
      <G strokeMiterlimit={10} fill="#fff">
        <Path d="M143.281 96.61H74.369a3.42 3.42 0 01-3.422-3.41V4.66a3.42 3.42 0 013.422-3.41h53.21c.915 0 1.774.355 2.42 1l15.702 15.65a3.382 3.382 0 011.002 2.412V93.2a3.42 3.42 0 01-3.422 3.41z" />
        <Path
          d="M74.369 2.5a2.168 2.168 0 00-2.172 2.16V93.2c0 1.191.974 2.16 2.172 2.16h68.912a2.168 2.168 0 002.172-2.16V20.312a2.14 2.14 0 00-.634-1.526L129.117 3.134a2.164 2.164 0 00-1.538-.634H74.37m0-2.5h53.21c1.239 0 2.427.49 3.303 1.364l15.702 15.652a4.654 4.654 0 011.369 3.296V93.2a4.666 4.666 0 01-4.672 4.66H74.369a4.666 4.666 0 01-4.672-4.66V4.66A4.666 4.666 0 0174.369 0z"
          fill="#8dbbf2"
        />
      </G>
      <Path
        d="M128.097 2.799V16.31a3.5 3.5 0 003.5 3.495h9.27"
        stroke="#75a4fe"
        fill="none"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeWidth={2.5}
      />
      <Path
        d="M83.713 79.219h0zm0-15.144h0zm0-15.146h0zm0-15.144h0zm0-13.98h0z"
        stroke="#76a6ef"
        fill="none"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeWidth={2.5}
      />
    </Svg>
  );
};

export const NoSearchResult = (props: Props): React.ReactElement => {
  const width = props.size || 167;
  const height = (width * 86.68) / 167;
  return (
    <Svg width={width} height={height} viewBox="0 0 167 86.68">
      <Path
        d="M46 70.25a7 7 0 110-14H7a7 7 0 110-14h40a7 7 0 000-14H22a7 7 0 010-14h40a7 7 0 110-14h98a7 7 0 010 14h-40a7 7 0 110 14h22a7 7 0 010 14h-10.174c-4.875 0-8.826 3.134-8.826 7s6 7 6 7a7 7 0 010 14zm107-35a7 7 0 117 7 7 7 0 01-7-7z"
        fill="#f3f7ff"
      />
      <G transform="translate(40 1.25)" strokeMiterlimit={10}>
        <Circle
          cx={33.5}
          cy={33.5}
          r={33.5}
          fill="#f3f7ff"
          stroke="#75a4fe"
          strokeWidth={2.5}
        />
        <Path
          data-name="Oval"
          d="M28.132 59.494A35.271 35.271 0 0033.5 60a26.535 26.535 0 10-19.816-8.9"
          fill="#fff"
          stroke="#75a4fe"
          strokeLinecap="round"
          strokeWidth={2.5}
        />
        <Path
          data-name="Oval"
          d="M16.797 54.075a26.473 26.473 0 007.2 4.172"
          fill="none"
          stroke="#75a4fe"
          strokeLinecap="round"
          strokeWidth={2.5}
        />
        <Path
          data-name="Oval"
          d="M34 15a18.979 18.979 0 00-19 19"
          fill="none"
          stroke="#a4c3fe"
          strokeLinecap="round"
          strokeWidth={2.5}
        />
        <Path
          data-name="Path 4"
          d="M61 60l6 6"
          fill="none"
          stroke="#75a4fe"
          strokeWidth={2.5}
        />
        <G fill="#e8f0fe">
          <Path d="M80.543 84.18c-1.388 0-2.67-.452-3.427-1.21L66.03 71.884c-.758-.758-1.21-2.039-1.21-3.427 0-1.387.452-2.669 1.21-3.427s2.04-1.21 3.427-1.21c1.388 0 2.67.452 3.427 1.21L83.97 76.116c.758.758 1.21 2.039 1.21 3.427 0 1.387-.452 2.669-1.21 3.427s-2.04 1.21-3.427 1.21z" />
          <Path
            d="M69.457 65.07c-1.047 0-2.022.323-2.543.844-.52.521-.844 1.496-.844 2.543 0 1.048.323 2.023.844 2.544L78 82.086c.521.52 1.496.844 2.544.844 1.047 0 2.022-.323 2.543-.844.52-.521.844-1.496.844-2.543 0-1.048-.323-2.023-.844-2.544L72 65.914c-.521-.52-1.496-.844-2.544-.844m0-2.5c1.63 0 3.26.525 4.311 1.576l11.086 11.086c2.102 2.102 2.102 6.52 0 8.622-1.052 1.05-2.681 1.576-4.311 1.576s-3.26-.525-4.311-1.576L65.146 72.768c-2.102-2.102-2.102-6.52 0-8.622 1.052-1.05 2.681-1.576 4.311-1.576z"
            fill="#75a4fe"
          />
        </G>
        <Path
          d="M71 67l11 11"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2.5}
        />
      </G>
      <Path
        data-name="Line 8"
        d="M119 35.028h0zm19.279-7.778h0zm-21.955 0h0zM29 57.028h0zM15.324 48.25h0zm-10.045 0h0z"
        fill="none"
        stroke="#a4c3fe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2.5}
      />
    </Svg>
  );
};
