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
}: TFormProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant={variant || "outlined"}
          size={size}
          type={type || "text"}
          fullWidth={fullWidth || false}
          sx={{ ...sx }}
          required={required || false}
        />
      )}
    />
  );
};

export default PAC_Input;
