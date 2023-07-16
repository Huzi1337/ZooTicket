import { DatePicker } from "@mantine/dates";
import { useState } from "react";

export const PickDate = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
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
