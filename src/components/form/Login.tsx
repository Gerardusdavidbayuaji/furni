import { useForm } from "react-hook-form";

import { CustomFormField } from "../CustomFormField";
import { Input } from "../ui/input";
import { Form } from "../ui/form";
import CustomButton from "../CustomButton";

const Login = () => {
  const form = useForm();
  function onSubmitLogin() {
    //testing
  }

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
            <CustomButton text="Login" action="Sending..." />
          </div>
        </form>
      </Form>
    </>
  );
};

export default Login;
