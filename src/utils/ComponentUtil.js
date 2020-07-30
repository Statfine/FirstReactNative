import React, { ComponentType } from 'react';
import { curry } from 'lodash';
import { view, Text, Button } from 'react-native';
import HiButton from '../components/Button';

export const DefaultComp = props => {
  return (
    <view>
      <Text>根据className:{props.$class}找不到对应的渲染组件</Text>
      <Text>在ComponentUtil.tsx下检查是否有正确映射对</Text>
    </view>
  );
};

const components = {
  AppButtom: HiButton,
};

const findCompByNameAndType = curry((dataSource, className) => {
  return dataSource[className] || DefaultComp;
});

export const findCompByClass = findCompByNameAndType(components);
