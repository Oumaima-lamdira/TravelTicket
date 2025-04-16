import { type FC, memo } from "react";

import { IOSSwitch } from "./MySwitcher.style";

interface switcherProps {
  isDarkMode: boolean;
  handleSwitchChange: () => void;
}
const MySwitcher: FC<switcherProps> = ({ isDarkMode, handleSwitchChange }) => {
  return <IOSSwitch defaultChecked={isDarkMode} onChange={handleSwitchChange} />;
};

export default memo(MySwitcher);
