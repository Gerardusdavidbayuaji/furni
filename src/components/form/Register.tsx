import { useForm } from "react-hook-form";

import { registerAccount } from "@/utils/apis/user/api";
import { RegisterSchema } from "@/utils/apis/user";

import { CustomFormField } from "../CustomFormField";
import CustomButton from "../CustomButton";
import { toast } from "@/hooks/use-toast";
import { Input } from "../ui/input";
import { Form } from "../ui/form";

const Register = () => {
  const form = useForm<RegisterSchema>({});

  const onSubmitRegister = async (data: RegisterSchema) => {
    try {
      const result = await registerAccount(data);

      toast({
        title: "Registration Successful",
        description: `Welcome ${result.user.username}, Your account has been created.`,
        variant: "default",
      });
    } catch (error: any) {
      const errorMessage = error.details?.errors?.[0]?.message || error.message;

      toast({
        title: "Oops, something went wrong!",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="text-[#2B2B2B] dark:text-[#FAFAFA] flex flex-col justify-center items-center space-y-1">
        <h1 className="font-semibold text-2xl">Daftar Sekarang</h1>
        <p className="text-[#2B2B2B]/70 dark:text-[#bfbfbb] font-normal text-base">
          Daftar untuk belanja kebutuhan Anda.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitRegister)}
          className="space-y-8"
          method="POST"
        >
          <CustomFormField
            control={form.control}
            name="username"
            label="Username"
          >
            {(field) => <Input {...field} placeholder="Username" type="text" />}
          </CustomFormField>

          <CustomFormField control={form.control} name="email" label="Email">
            {(field) => <Input {...field} placeholder="Email" type="email" />}
          </CustomFormField>

          <CustomFormField
            control={form.control}
            name="password"
            label="Password"
          >
            {(field) => (
              <Input {...field} placeholder="Password" type="password" />
            )}
          </CustomFormField>

          <div className="flex flex-col space-y-2">
            <CustomButton
              text="Register"
              action="Sending..."
              onClick={form.handleSubmit(onSubmitRegister)}
            />
          </div>
        </form>
      </Form>
    </>
  );
};

export default Register;
