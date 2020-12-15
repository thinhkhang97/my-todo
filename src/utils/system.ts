import {Colors} from 'assets/color';
import {Dimensions} from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const HIT_SLOP = {top: 8, left: 8, right: 8, bottom: 8};

export const PRIORITY_STYLE: {[key: string]: any} = {
  high: {
    title: 'high',
    style: {
      color: Colors.red2,
      backgroundColor: Colors.red1,
    },
  },
  medium: {
    title: 'medium',
    style: {
      color: Colors.yellow2,
      backgroundColor: Colors.yellow1,
    },
  },
  low: {
    title: 'low',
    style: {
      color: Colors.gray3,
      backgroundColor: Colors.gray1,
    },
  },
};
