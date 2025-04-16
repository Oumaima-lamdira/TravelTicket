import Header from "~components/header";
import MySpaceForm from "~components/myspace-form";
import imagesPath from "~public/assets/styles/imagesPath";

import MySpaceLayout from "./layout";

export const metadata = {
  title: "mySpace",
};

const MySpace: React.FC = () => {
  return (
    <MySpaceLayout>
      <Header />
      <MySpaceForm src={imagesPath.ciranImage}></MySpaceForm>
    </MySpaceLayout>
  );
};
export default MySpace;
