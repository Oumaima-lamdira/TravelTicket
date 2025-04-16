import AuthImage from "~components/authImage";
import SignUp from "~components/signup";
import imagesPath from "~public/assets/styles/imagesPath";

export const metadata = {
  title: "signup",
};

const SignUpPage: React.FC = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="sm-hidden md:flex-1 w-2">
        <AuthImage src={imagesPath.signinImage}></AuthImage>
      </div>
      <div className="flex-1 w-2">
        <SignUp></SignUp>
      </div>
    </div>
  );
};
export default SignUpPage;
