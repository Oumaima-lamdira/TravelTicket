import type { FC } from "react";

const PrivateLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default PrivateLayout;
