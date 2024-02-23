"use client";

import { useRef, useState } from "react";
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";
import { submitForm } from "@/app/actions";
import SubmitButton from "./SubmitButton";
import NotificationModal from "@/app/_component/modal/NotificationModal";
import ErrorToast from "@/app/_component/modal/ErrorToast";

const formData = [
  {
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
  },
  {
    name: "message",
    label: "Leave Your Message",
    type: "text",
  },
];

const ContactForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const defaultNotification = { type: "", message: "" };
  const [Notification, setNotification] = useState(defaultNotification);

  const handleSubmit = async (formData: FormData) => {
    try {
      const res: any = await submitForm(formData);
      if (res?.response?.includes("OK")) {
        setNotification({ type: "success", message: "" });
        ref?.current?.reset();
      }
    } catch (err: any) {
      setNotification({
        type: "error",
        message: err.message || "Unable to send message. Please try later.",
      });
    }
  };

  return (
    <form action={handleSubmit} ref={ref} className="font-kumbh">
      {formData.map((item) =>
        item.name !== "message" ? (
          <ContactInput key={item.name} {...item} />
        ) : (
          <ContactTextArea key={item.name} {...item} />
        )
      )}
      <SubmitButton />

      {Notification?.type === "success" && (
        <NotificationModal
          message="Thank you for reaching out. We will be in touch as soon as we can."
          close={() => setNotification(defaultNotification)}
        />
      )}
      {Notification.type === "error" && (
        <ErrorToast
          message="Message not sent! Please check the fields and try again."
          // message={Notification?.message}
          close={() => setNotification(defaultNotification)}
        />
      )}
    </form>
  );
};

export default ContactForm;
