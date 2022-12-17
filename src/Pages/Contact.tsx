import Button from "../components/Button";
import TextAreaInput from "../components/TextAreaInput";
import TextInput from "../components/TextInput";
import { useForm, SubmitHandler } from "react-hook-form";
import Socials from "../components/Socials";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className='w-screen bg-darkGrey bg-[url("./assets/images/pattern-rings.svg")] bg-[position:380%_69%] tablet:bg-[position:-100%_82%] pc:bg-[position:-20%_50%] bg-no-repeat px-4 tablet:px-40  '>
      <div className="py-10 pc:py-16 pc:grid pc:grid-cols-2  border-b-2 border-white">
        <div className="flex flex-col justify-center items-center pc:items-start pc:justify-start">
          <h1 className=" text-[2.5rem] pc:text-xl tablet:text-[4.5rem] pb-5 ">
            Contact
          </h1>
          <p className="text-body text-center pc:text-left text-grey text-[1rem] tablet:text-body">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="w-[21.4rem] tablet:w-[27.8rem] mx-auto "
        >
          <TextInput
            x={register("name", {
              required: "This field can't be empty.",
              pattern: {
                value: /^[^\s]+(?:$|.*[^\s]+$)/,
                message: "No leading spaces!",
              },
            })}
            fieldName="name"
            error={errors.name?.message}
          />
          <TextInput
            x={register("email", {
              required: "This field can't be empty.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Sorry, invalid format here",
              },
            })}
            fieldName="email"
            error={errors.email?.message}
          />
          <TextAreaInput
            x={register("message", {
              required: "This field can't be empty.",
              pattern: {
                value: /^[^\s]+(?:$|.*[^\s]+$)/,
                message: "No leading spaces!",
              },
            })}
            fieldName="message"
            error={errors.message?.message}
          />
          <div className="py-8 flex justify-end mr-3">
            <Button className="" type="submit">
              Send message
            </Button>
          </div>
        </form>
      </div>
      <div className="pt-8 tablet:pt-0 pc:pt-0">
        <Socials />
      </div>
    </div>
  );
};

export default Contact;
