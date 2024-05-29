import { ReactNode } from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";


type TFormProps ={
  children: ReactNode;
  onSubmit : SubmitHandler<FieldValues>;

}

const PAC_Form = ({ children, onSubmit }: TFormProps) => {
  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const submit = (data: FieldValues) => {
    onSubmit(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)} className="space-y-3">{children}</form>
    </FormProvider>
  );
};

export default PAC_Form;
