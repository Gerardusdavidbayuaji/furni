import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { toast } from "@/hooks/use-toast";

import { LoginSchema, loginSchema } from "@/utils/apis/user/type";
import { loginUser } from "@/utils/store/userSice";
import { loginAccount } from "@/utils/apis/user";

import { CustomFormField } from "../CustomFormField";
import CustomButton from "../CustomButton";
import { Input } from "../ui/input";
import { Form } from "../ui/form";

const Login = () => {
  const dispatch = useDispatch();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmitLogin: SubmitHandler<LoginSchema> = async (data) => {
    try {
      const result = await loginAccount(data);
      dispatch(loginUser(result));
      toast({
        title: "Login Successful",
        description: `Welcome ${result.user.username}, You have successfully logged in.`,
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
          Please come in and begin your shopping.
        </h1>
        <p className="text-[#2B2B2B]/70 dark:text-[#bfbfbb] font-normal text-xs md:text-sm lg:text-base">
          Step inside and experience the joy of shopping today.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitLogin)}
          className="space-y-2 md:space-y-5 lg:space-y-8 mt-2"
        >
          <CustomFormField
            control={form.control}
            name="identifier"
            label="Username"
          >
            {(field) => (
              <Input {...field} placeholder="Jhon Doe" type="username" />
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
              text="Login"
              action="Sending..."
              onClick={form.handleSubmit(onSubmitLogin)}
            />
          </div>
        </form>
      </Form>
    </>
  );
};

export default Login;
