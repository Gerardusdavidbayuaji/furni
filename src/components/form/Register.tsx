import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";

import { RegisterSchema, registerSchema } from "@/utils/apis/user/type";
import { registerAccount } from "@/utils/apis/user/api";

import { CustomFormField } from "../CustomFormField";
import CustomButton from "../CustomButton";
import { Input } from "../ui/input";
import { Form } from "../ui/form";

const Register = () => {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

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
        title: "Oops, something went wrong.",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="text-[#2B2B2B] dark:text-[#FAFAFA] flex flex-col justify-center items-center space-y-1">
        <h1 className="font-semibold text-base md:text-xl lg:text-2xl">
          Register Now
        </h1>
        <p className="text-[#2B2B2B]/70 dark:text-[#bfbfbb] font-normal text-xs md:text-sm lg:text-base">
          Sign up to shop for all your needs.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitRegister)}
          className="space-y-2 md:space-y-5 lg:space-y-8 mt-2"
          method="POST"
        >
          <CustomFormField
            control={form.control}
            name="username"
            label="Username"
          >
            {(field) => <Input {...field} placeholder="Jhon Doe" type="text" />}
          </CustomFormField>

          <CustomFormField control={form.control} name="email" label="Email">
            {(field) => (
              <Input {...field} placeholder="jhondoe@gmail.com" type="email" />
            )}
          </CustomFormField>

          <CustomFormField
            control={form.control}
            name="password"
            label="Password"
          >
            {(field) => (
              <Input
                {...field}
                placeholder="Minimum 6 character"
                type="password"
              />
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
