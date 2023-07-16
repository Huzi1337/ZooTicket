import { Stepper } from "@mantine/core";
import SectionTitle from "../SectionTitle";
import { useState } from "react";

import {
  FillPaymentInfo,
  PickDate,
  PickTicketType,
} from "../PurchaseForm/FormSteps";

import "./PurchaseForm.scss";

import FormStepShell from "../PurchaseForm/FormStepShell";

const STEPS = [
  ["TICKET", <PickDate></PickDate>],
  ["FILL INFO", <PickTicketType></PickTicketType>],
  ["PAYMENT", <FillPaymentInfo></FillPaymentInfo>],
];

const PurchaseForm = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div className="purchaseForm__container">
      <SectionTitle title="Buy entrance ticket to the ZOO"></SectionTitle>

      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        {STEPS.map((step, key) => (
          <Stepper.Step label={step[0]} key={key}>
            <FormStepShell nextStep={nextStep} prevStep={prevStep}>
              {step[1]}
            </FormStepShell>
          </Stepper.Step>
        ))}

        <Stepper.Completed>
          <FormStepShell nextStep={nextStep} prevStep={prevStep}>
            Complete!
          </FormStepShell>
        </Stepper.Completed>
      </Stepper>
    </div>
  );
};

export default PurchaseForm;
