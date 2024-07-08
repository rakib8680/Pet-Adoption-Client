import { SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@mui/material";

type TProps = {
  disabled?: boolean;
  name: string;
  label?: string;
  sx?: SxProps;
  color?: "primary" | "secondary";
  variant?: "text" | "outlined" | "contained";
  fullWidth?: boolean;
};

export default function RXFileUpload({
  name,
  label,
  sx,
  disabled,
  color,
  variant,
  fullWidth,
}: TProps) {


  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <Button
            fullWidth={fullWidth}
            disabled={disabled}
            color={color}
            role={undefined}
            variant={variant}
            component='label'
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ ...sx }}
          >
            {value?.name?.slice(0, 14) || label || "Upload file"}
            <Input
              {...field}
              type="file"
              onChange={(e) => {
                const file = (e?.target as HTMLInputElement).files?.[0];
                onChange(file);
              }}
              style={{ display: "none" }}
            />
          </Button>
        );
      }}
    />
  );
}