import { useForm } from "react-hook-form";

import { CustomFormField } from "../CustomFormField";
import CustomButton from "../CustomButton";
import { Input } from "../ui/input";
import { Form } from "../ui/form";
import { registerAccount } from "@/utils/apis/user/api";
import { toast } from "@/hooks/use-toast";
import { RegisterSchema } from "@/utils/apis/user";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const form = useForm<RegisterSchema>();
  const navigate = useNavigate();
  const onSubmitRegister = async (data: RegisterSchema) => {
    try {
      const result = await registerAccount(data);
      toast({ description: result.message });
      navigate("/login");
    } catch (error: any) {
      console.log("error register", error);
      toast({
        title: "Oops, somethinh went wrong!",
        description: error?.response?.data?.message || error?.message,
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
            {(field) => (
              <Input {...field} placeholder="username" type="username" />
            )}
          </CustomFormField>

          <CustomFormField control={form.control} name="email" label="Email">
            {(field) => <Input {...field} placeholder="email" type="email" />}
          </CustomFormField>

          <CustomFormField
            control={form.control}
            name="password"
            label="Password"
          >
            {(field) => (
              <Input {...field} placeholder="password" type="password" />
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
