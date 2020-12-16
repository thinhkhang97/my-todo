import {CharacterStyles} from 'assets/character-styles';
import {Colors} from 'assets/color';
import React, {ReactElement, useEffect, useState} from 'react';
import {Text} from 'react-native';
import {getDateTimeString, getDiffDay} from 'utils/time';

interface Props {
  deadline: Date;
}

type StateTime = 'long' | 'near' | 'over';

export const IndicatorTime = (props: Props): ReactElement => {
  const {deadline} = props;
  const [stateTime, setStateTime] = useState<StateTime>('long');
  useEffect(() => {
    const interval = setInterval(() => {
      // near
      const today = new Date();
      const diffDays = getDiffDay(deadline, today);
      if (diffDays >= 0 && diffDays <= 1) {
        setStateTime('near');
      } else if (today > deadline) {
        setStateTime('over');
      } else {
        setStateTime('long');
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  const color =
    stateTime === 'long'
      ? Colors.green1
      : stateTime === 'near'
      ? Colors.yellow2
      : Colors.red2;
  return (
    <Text style={[CharacterStyles.smallItalicText, {color}]}>
      {`Due to: ${getDateTimeString(deadline)}`}
    </Text>
  );
};
