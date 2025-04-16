import { MENU_ITEMS } from "~components/formProduct/constants";

import type { SelectChangeEvent } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { FC } from "react";

interface SelectInputProps {
  select: {
    label: string;
    name: string;
    value: string;
  };
  handleChange: (event: SelectChangeEvent) => void;
}

const SelectInput: FC<SelectInputProps> = ({ select, handleChange }) => {
  return (
    <FormControl key={select.name} variant="standard">
      <InputLabel id={select.name}>{select.label}</InputLabel>
      <Select
        labelId={select.name}
        id={select.name}
        name={select.name}
        value={select.value}
        label={select.label}
        onChange={handleChange}
      >
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
