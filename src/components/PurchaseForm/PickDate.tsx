import { DatePicker } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";

import { ITicketPurchaseFormData } from "../../assets/types";

type Props = {
  form: UseFormReturnType<ITicketPurchaseFormData>;
};

export const PickDate = ({ form }: Props) => {
  return (
    <DatePicker
      {...form.getInputProps("date")}
      defaultDate={new Date()}
      minDate={new Date()}
      size="xl"
      styles={() => ({
        day: {
          "&[data-selected], &[data-selected]:hover": {
            backgroundColor: "#179e76",
            color: "white",
          },
        },
      })}
    />
  );
};

export default PickDate;
