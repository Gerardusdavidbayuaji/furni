import { useForm } from "react-hook-form";

import { CustomFormField } from "../CustomFormField";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Form } from "../ui/form";

const Register = () => {
  const form = useForm();
  function onSubmitRegister() {
    //testing
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-1 text-[#2B2B2B]">
        <h1 className="font-semibold text-2xl">Daftar Sekarang</h1>
        <p className="font-normal text-base text-[#2B2B2B]/70">
          Daftar untuk belanja kebutuhan Anda.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitRegister)}
          className="space-y-8"
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
            <Button
              type="submit"
              className="w-full bg-[#778F86] shadow-none hover:bg-[#778F86]/80 text-[#FAFAFA]"
            >
              Register
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Register;