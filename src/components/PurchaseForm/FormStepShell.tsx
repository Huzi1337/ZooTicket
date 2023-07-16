import { Button } from "@mantine/core";
import Card from "../Card";

import "./FormStepShell.scss";

type Props = {
  prevStep: () => void;
  nextStep: () => void;
  children: React.ReactNode;
};

const FormStepShell = ({ prevStep, nextStep, children }: Props) => {
  return (
    <Card>
      {children}

      <div className="formStepShell__buttonContainer">
        <Button
          styles={() => ({
            root: {
              boxShadow: "0px 0px 12px 0px rgba(49, 49, 49, 0.30)",
              borderRadius: "16px",
              padding: "10px 38px",
              marginTop: "auto",
            },
          })}
          variant="default"
          onClick={prevStep}
        >
          Back
        </Button>
        <Button
          styles={() => ({
            root: {
              backgroundColor: "#179e76",
              boxShadow: "0px 0px 12px 0px rgba(49, 49, 49, 0.30)",
              borderRadius: "16px",
              padding: "10px 38px",
              marginTop: "auto",
            },
          })}
          onClick={nextStep}
        >
          Next step
        </Button>
      </div>
    </Card>
  );
};

export default FormStepShell;
