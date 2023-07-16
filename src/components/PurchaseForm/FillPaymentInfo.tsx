import { Group, Radio, TextInput } from "@mantine/core";

import "./FillPaymentInfo.scss";

const FillPaymentInfo = () => {
  return (
    <>
      <h6>June - Adult1Child1</h6>
      <h4>Payment Total</h4>
      <div className="paymentInfo__ticketSummary">
        <h4>1 adult 1 child</h4> <h4>24PLN</h4>
      </div>
      <h4>Card Type</h4>
      <Radio.Group>
        <Group mt="xs">
          <Radio value="visa" label="VISA" />
          <Radio value="mc" label="MasterCard" />
          <Radio value="btc" label="Bitcoin" />
        </Group>
      </Radio.Group>
      <h4>Card Details</h4>
      <TextInput label="Cardholder's Name"></TextInput>
      <TextInput label="Card Number"></TextInput>
      <Group>
        <TextInput label="Valid Thru"></TextInput>
        <TextInput label="CCV"></TextInput>
      </Group>
    </>
  );
};

export default FillPaymentInfo;
