import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface TSelectFieldProps {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  variant?: "standard" | "outlined" | "filled";
  items: string[];
}

const PAC_Select = ({
  items,
  name,
  label,
  color,
  size,
  required,
  variant,
  fullWidth = true,
  sx,
}: TSelectFieldProps) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          select
          sx={{ ...sx }}
          size={size}
          label={label}
          required={required}
          fullWidth={fullWidth}
          color={color}
          variant={variant}
          error={isError}
          helperText={
            isError ? (formState.errors[name]?.message as string) : ""
          }
        >
          {items.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default PAC_Select;
