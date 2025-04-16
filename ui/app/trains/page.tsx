import Header from "~components/header";

import MySpaceLayout from "./layout";
import TrainsList from "~components/trainslist";

export const metadata = {
  title: "mySpace",
};

const MyTrains: React.FC = () => {
  return (
    <MySpaceLayout>
      <Header />
      <TrainsList />
    </MySpaceLayout>
  );
};
export default MyTrains;
