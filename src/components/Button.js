import * as React from 'react';
import { Button } from 'react-native';
import { JumpPage } from '../utils/RouterJump';

function HiButton({ data }) {
  const handleOnPress = () => {
    const {
      event: { type, goalPage, params },
    } = data;
    if (type === 'jump') JumpPage(goalPage, params);
  };

  return <Button title={data.name} onPress={handleOnPress} />;
}

export default HiButton;
