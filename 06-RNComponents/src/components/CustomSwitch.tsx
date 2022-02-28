import React, {useContext} from 'react';
import {Switch} from 'react-native';
import {useState} from 'react';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: colors.primary}}
      thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
