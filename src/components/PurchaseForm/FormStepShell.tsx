import { Button } from "@mantine/core";
import Card from "../Card";

import "./FormStepShell.scss";

type Props = {
  prevStep: () => void;
  nextStep: () => void;
  children: React.ReactNode;
  step: number;
  currentStep: number;
  numberOfSteps: number;
};

const FormStepShell = ({
  prevStep,
  nextStep,
  children,
  step,
  currentStep,
  numberOfSteps,
}: Props) => {
  return (
    <Card wide={step > 0}>
      {children}

      <div className="formStepShell__buttonContainer">
        {currentStep != 0 && currentStep != numberOfSteps && (
          <Button uppercase variant="default" onClick={prevStep}>
            Back
          </Button>
        )}
        <Button
          uppercase
          styles={() => ({
            root: {
              backgroundColor: "#179e76",
            },
          })}
          onClick={nextStep}
        >
          {currentStep < numberOfSteps - 1
            ? "Next Step"
            : currentStep < numberOfSteps
            ? "Purchase"
            : "Back to Homepage"}
        </Button>
      </div>
    </Card>
  );
};

export default FormStepShell;
