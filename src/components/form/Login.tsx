import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "@/hooks/use-toast";

import { loginAccount } from "@/utils/apis/user/api";
import { LoginSchema } from "@/utils/apis/user/type";
import { loginUser } from "@/utils/store/userSice";

import { CustomFormField } from "../CustomFormField";
import CustomButton from "../CustomButton";
import { Input } from "../ui/input";
import { Form } from "../ui/form";

const Login = () => {
  const form = useForm<LoginSchema>();
  const dispatch = useDispatch();

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
        title: "Oops, something went wrong!",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="text-[#2B2B2B] dark:text-[#FAFAFA] flex flex-col justify-center items-center space-y-1">
        <h1 className="font-semibold text-2xl">Ayo Login dan Mulai Belanja</h1>
        <p className="text-[#2B2B2B]/70 dark:text-[#bfbfbb] font-normal text-base">
          Masuk untuk melanjutkan belanja kebutuhan Anda.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitLogin)} className="space-y-8">
          <CustomFormField
            control={form.control}
            name="identifier"
            label="username"
          >
            {(field) => (
              <Input {...field} placeholder="Username" type="username" />
            )}
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
