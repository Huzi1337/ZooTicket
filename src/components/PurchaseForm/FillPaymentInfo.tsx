import { Group, Radio, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

import { useEffect, useMemo } from "react";

import "./FillPaymentInfo.scss";
import { ChangeEvent, useState } from "react";
import { ITicketPurchaseFormData, ItemData } from "../../assets/types";
import dayjs from "dayjs";
import calculateTotalCost from "../../utils/calculateTotalPrice";

type Props = {
  form: UseFormReturnType<ITicketPurchaseFormData>;
  data: ItemData[];
};

const FillPaymentInfo = ({
  form,
  form: {
    values: { cardNumber: formCardNumber, validThru, date, tickets },
  },
  data,
}: Props) => {
  const [cardNumber, setCardNumber] = useState(
    formCardNumber.length > 0 ? formCardNumber : ""
  );
  const [expirationDate, setExpirationDate] = useState(
    validThru.length > 0 ? validThru : ""
  );
  const [cvv, setCVV] = useState("");

  useEffect(() => {
    form.setFieldValue("cardNumber", cardNumber);
  }, [cardNumber]);

  useEffect(() => {
    form.setFieldValue("validThru", expirationDate);
  }, [expirationDate]);

  useEffect(() => {
    form.setFieldValue("cvv", cvv);
  }, [cvv]);

  const totalCost = useMemo(() => calculateTotalCost(data, tickets), [tickets]);

  const formatExpirationDate = (value: string): string => {
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    const groups = sanitizedValue.match(/.{1,2}/g);
    const formattedValue = groups ? groups.join("/") : sanitizedValue;
    return formattedValue;
  };

  const formatCardNumber = (value: string) => {
    const sanitizedValue = value.replace(/[^\d]/g, "");
    const groups = sanitizedValue.match(/.{1,4}/g);
    const formattedValue = groups ? groups.join(" ") : sanitizedValue;
    return formattedValue;
  };

  const formatCVV = (value: string): string => {
    const sanitizedValue = value.replace(/[^0-9]/g, "");

    return sanitizedValue;
  };

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const formattedValue = formatCardNumber(value);
    setCardNumber(formattedValue);
  };

  const handleExpirationDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const formattedValue = formatExpirationDate(value);
    setExpirationDate(formattedValue);
  };

  const handleCVVChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const formattedValue = formatCVV(value);
    setCVV(formattedValue);
  };
  return (
    <>
      <h6>{dayjs(date).format("D MMMM YYYY")}</h6>
      <h4 className="paymentInfo__bold title">Payment Total</h4>
      <div className="paymentInfo__ticketSummary">
        <div>
          {Object.values(tickets).map((numberOfTickets, key) =>
            numberOfTickets > 0 ? (
              <h4>
                {numberOfTickets +
                  "x " +
                  data[key].type +
                  `(${data[key].price}PLN)`}{" "}
              </h4>
            ) : null
          )}
        </div>{" "}
        <h4 className="paymentInfo__cost">{totalCost + "PLN"}</h4>
      </div>
      <h4 className="paymentInfo__bold">Card Type</h4>
      <Radio.Group
        {...form.getInputProps("cardProvider")}
        className="paymentInfo__radioGroup"
      >
        <Group className="paymentInfo__radioGroup__inputs" mt="xs">
          <Radio value="visa" label="VISA" />
          <Radio value="mc" label="MasterCard" />
          <Radio value="btc" label="Bitcoin" />
        </Group>
      </Radio.Group>
      <h4 className="paymentInfo__bold">Card Details</h4>
      <TextInput
        {...form.getInputProps("name")}
        label="Cardholder's Name"
      ></TextInput>
      <TextInput
        label="Card Number"
        {...form.getInputProps("cardNumber")}
        onChange={handleCardNumberChange}
        value={cardNumber}
        placeholder="xxxx xxxx xxxx xxxx"
        maxLength={19}
      ></TextInput>
      <Group className="paymentInfo__textInputGroup">
        <TextInput
          label="Valid Thru"
          {...form.getInputProps("validThru")}
          onChange={handleExpirationDateChange}
          value={expirationDate}
          maxLength={5}
          placeholder="xx / xx"
        ></TextInput>
        <TextInput
          label="CCV"
          {...form.getInputProps("cvv")}
          onChange={handleCVVChange}
          value={cvv}
          maxLength={3}
          placeholder="xxx"
        ></TextInput>
      </Group>
    </>
  );
};

export default FillPaymentInfo;
