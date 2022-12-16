import Button from "../components/Button";
import TextAreaInput from "../components/TextAreaInput";
import TextInput from "../components/TextInput";

const Contact = () => {
  return (
    <div className="w-screen bg-darkGrey  text-center">
      <h1 className="text-l text-[40px] pt-16 pb-5 px-4">Contact</h1>
      <p className="text-grey pb-12 px-4 text-body text-[0.95rem]">
        I would love to hear about your project and how I could help. Please
        fill in the form, and I’ll get back to you as soon as possible.
      </p>
      <form action="">
        <TextInput fieldName="name" />
        <TextInput fieldName="email" />
        <TextAreaInput fieldName="message" />
        <div className="flex justify-end py-8">
          <Button className="mr-4 ">Send message</Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
