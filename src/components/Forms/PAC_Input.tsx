import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TFormProps = {
  name: string;
  label: string;
  fullWidth?: boolean;
  type?: string;
  size?: "small" | "medium";
  variant?: "standard" | "outlined" | "filled";
  sx?: SxProps;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
};

const PAC_Input = ({
  name,
  label,
  fullWidth,
  size,
  variant,
  type,
  sx,
  required,
  multiline,
  rows,
  color,
}: TFormProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          variant={variant || "outlined"}
          size={size}
          type={type || "text"}
          color={color}
          fullWidth={fullWidth || false}
          sx={{ ...sx }}
          required={required || false}
          multiline={multiline || false}
          rows={rows}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default PAC_Input;
