import { Stepper } from "@mantine/core";
import SectionTitle from "../SectionTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FillPaymentInfo from "../PurchaseForm/FillPaymentInfo";
import PickTicketType from "../PurchaseForm/PickTicketType";
import PickDate from "../PurchaseForm/PickDate";

import "./PurchaseForm.scss";

import FormStepShell from "../PurchaseForm/FormStepShell";
import { ITicketPurchaseFormData, PriceData } from "../../assets/types";
import { useForm } from "@mantine/form";
import PurchaseComplete from "../PurchaseForm/PurchaseComplete";

type Props = {
  data: PriceData;
};

const PurchaseForm = ({ data }: Props) => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formSubmitHandler = () => {
    console.log(form.values);
  };

  const form = useForm<ITicketPurchaseFormData>({
    initialValues: {
      date: new Date(),
      tickets: {
        kid3YO: 0,
        child316YO: 0,
        concessions: 0,
        students: 0,
        adult: 0,
        FPA: 0,
        FPB: 0,
        FPC: 0,
        FPD: 0,
      },
      cardProvider: "",
      name: "",
      cardNumber: "",
      validThru: "",
      cvv: "",
    },
    validate: {
      cardNumber: (value) =>
        value.length < 19 ? "Provide a valid credit card number." : null,
      cardProvider: (value) =>
        value.length > 0 ? null : "Select a card provider.",
      name: (value) =>
        value.trim().length > 2
          ? null
          : "Name must consist of at least 2 characters.",
      validThru: (value) => (value.length != 5 ? "Invalid value." : null),
      cvv: (value) => (value.length != 3 ? "Invalid value." : null),
      tickets: (value) =>
        Object.values(value).reduce((sum, currentValue) => sum + currentValue) >
        0
          ? null
          : "You must select at least 1 ticket.",
    },
  });

  const nextStep = () => {
    console.log(form.values);
    let isValid = true;
    switch (active) {
      case 0:
        isValid = !form.validateField("date").hasError;
        break;
      case 1:
        isValid = !form.validateField("tickets").hasError;
        break;
      case 2:
        isValid = !form.validate().hasErrors;
        break;
    }

    if (isValid)
      setActive((current) => {
        if (current + 1 === STEPS.length) formSubmitHandler();
        return current + 1;
      });
  };

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const STEPS = [
    ["TICKET", <PickDate form={form}></PickDate>],
    [
      "FILL INFO",
      <PickTicketType
        form={form}
        items={Object.entries(data).sort((a, b) => a[1].price - b[1].price)}
      ></PickTicketType>,
    ],
    [
      "PAYMENT",
      <FillPaymentInfo
        data={Object.values(data).sort((a, b) => a.price - b.price)}
        form={form}
      ></FillPaymentInfo>,
    ],
  ];

  return (
    <div className="purchaseForm__container">
      <SectionTitle title="Buy entrance ticket to the ZOO"></SectionTitle>

      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        allowNextStepsSelect={false}
      >
        {STEPS.map((step, key) => (
          <Stepper.Step
            allowStepSelect={active != STEPS.length}
            label={step[0]}
            key={key}
          >
            <FormStepShell
              currentStep={active}
              numberOfSteps={STEPS.length}
              step={key}
              nextStep={nextStep}
              prevStep={prevStep}
            >
              {step[1]}
            </FormStepShell>
          </Stepper.Step>
        ))}

        <Stepper.Completed>
          <FormStepShell
            numberOfSteps={STEPS.length}
            currentStep={active}
            step={STEPS.length - 1}
            nextStep={goBackHome}
            prevStep={prevStep}
          >
            <PurchaseComplete
              data={Object.values(data).sort((a, b) => a.price - b.price)}
              form={form}
            />
          </FormStepShell>
        </Stepper.Completed>
      </Stepper>
    </div>
  );
};

export default PurchaseForm;
