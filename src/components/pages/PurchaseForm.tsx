import { Stepper } from "@mantine/core";
import SectionTitle from "../SectionTitle";
import { useState } from "react";

import FillPaymentInfo from "../PurchaseForm/FillPaymentInfo";
import PickTicketType from "../PurchaseForm/PickTicketType";
import PickDate from "../PurchaseForm/PickDate";

import "./PurchaseForm.scss";

import FormStepShell from "../PurchaseForm/FormStepShell";
import { PriceData } from "../../assets/types";

type Props = {
  data: PriceData;
};

const PurchaseForm = ({ data }: Props) => {
  const [active, setActive] = useState(0);

  const STEPS = [
    ["TICKET", <PickDate></PickDate>],
    [
      "FILL INFO",
      <PickTicketType
        items={Object.values(data).sort((a, b) => a.price - b.price)}
      ></PickTicketType>,
    ],
    ["PAYMENT", <FillPaymentInfo></FillPaymentInfo>],
  ];
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
            <FormStepShell step={key} nextStep={nextStep} prevStep={prevStep}>
              {step[1]}
            </FormStepShell>
          </Stepper.Step>
        ))}

        <Stepper.Completed>
          <FormStepShell
            step={STEPS.length - 1}
            nextStep={nextStep}
            prevStep={prevStep}
          >
            Complete!
          </FormStepShell>
        </Stepper.Completed>
      </Stepper>
    </div>
  );
};

export default PurchaseForm;
