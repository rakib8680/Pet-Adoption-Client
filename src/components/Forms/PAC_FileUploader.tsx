"use client";
import { useState } from "react";
import { CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import { Box, Button, Input, SvgIconProps, SxProps } from "@mui/material";
import { ReactElement } from "react";

interface IFileUploadButton {
  name: string;
  label?: string;
  accept?: string;
  sx?: SxProps;
  icon?: ReactElement<SvgIconProps>;
  variant?: "contained" | "text";
  onFileUpload: (file: File) => void;
}


const PAC_FileUploader = ({
  name,
  label,
  accept,
  sx,
  icon,
  variant = "contained",
  onFileUpload,
}: IFileUploadButton) => {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <Box>
      <Button
        component="label"
        role={undefined}
        fullWidth
        disableElevation
        color="secondary"
        variant={variant}
        tabIndex={-1}
        startIcon={icon ? icon : <CloudUploadIcon />}
        sx={{ ...sx }}
      >
        {fileName || label || "Upload file"}
        <Input
          type="file"
          inputProps={{ accept: accept }}
          style={{ display: "none" }}
          onChange={(e) => {
            const fileInput = e.target as HTMLInputElement;
            const file = fileInput.files?.[0];
            if (file) {
              setFileName(file.name);
              onFileUpload(file);
            }
          }}
        />
      </Button>
    </Box>
  );
};

export default PAC_FileUploader;
