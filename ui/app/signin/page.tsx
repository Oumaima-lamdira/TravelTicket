import AuthImage from "~components/authImage";
import SigninForm from "~components/signinForm";
import imagesPath from "~public/assets/styles/imagesPath";

export const metadata = {
  title: "signin",
};

const SignInPage: React.FC = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="sm-hidden md:flex-1 w-2">
        <AuthImage src={imagesPath.signinImage}></AuthImage>
      </div>
      <div className="flex-1 w-2">
        <SigninForm></SigninForm>
      </div>
    </div>
  );
};
export default SignInPage;
