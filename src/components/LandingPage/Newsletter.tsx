import { Button, TextInput } from "@mantine/core";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="landingPage__newsletter">
      <div className="lion" />
      <div className="landingPage__newsletter__info">
        <h2>Join our newsletter!</h2>
        <div className="landingPage__newsletter__row">
          <TextInput></TextInput>
          <Button>Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
