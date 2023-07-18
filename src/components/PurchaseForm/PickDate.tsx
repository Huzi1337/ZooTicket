import { DatePicker } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";

import { ITicketPurchaseFormData } from "../../assets/types";
import { useEffect, useState } from "react";

type Props = {
  form: UseFormReturnType<ITicketPurchaseFormData>;
};

export const PickDate = ({ form }: Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <DatePicker
      {...form.getInputProps("date")}
      defaultDate={new Date()}
      minDate={new Date()}
      size={windowWidth > 520 ? "xl" : "md"}
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
