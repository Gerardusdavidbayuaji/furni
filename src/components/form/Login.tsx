import { useForm, SubmitHandler } from "react-hook-form";

import { CustomFormField } from "../CustomFormField";
import { Input } from "../ui/input";
import { Form } from "../ui/form";
import CustomButton from "../CustomButton";
import { LoginSchema } from "@/utils/apis/user/type";
import { loginAccount } from "@/utils/apis/user/api";
import { toast } from "@/hooks/use-toast";
import { useDispatch } from "react-redux";
import { loginUser } from "@/utils/store/userSice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useForm<LoginSchema>();

  const onSubmitLogin: SubmitHandler<LoginSchema> = async (data) => {
    try {
      const result = await loginAccount(data);
      dispatch(loginUser(result));
      toast({ description: "Login berhasil" });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "oops, something went wrong!",
        description: error.toString(),
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
