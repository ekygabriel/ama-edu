"use client";

import { useRef, useState } from "react";
import SubscribeButton from "./SubscribeButton";
import { SubscribeToNewsLetter } from "@/app/actions";
import NotificationModal from "@/app/_component/modal/NotificationModal";
import ErrorToast from "@/app/_component/modal/ErrorToast";

const NewsletterForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const defaultNotification = { type: "", message: "" };
  const [Notification, setNotification] = useState(defaultNotification);

  const handleSubscribeToNewsletter = async (formData: FormData) => {
    const email = formData.get("email");
    const testEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      email as string
    );
    if (!testEmail) {
      setNotification({ message: "Invalid email format", type: "error" });
      return;
    }

    try {
      const res: any = await SubscribeToNewsLetter(email!);
      ref?.current?.reset();
      if (res == "OK") {
        setNotification({
          type: "success",
          message:
            "You have been added to my mailing list. You will be the first to hear about the latest contents from our stable.",
        });
        ref?.current?.reset();
      }
    } catch (err: any) {
      setNotification({
        type: "error",
        message:
          err.message ||
          "Oops!! There was an error subscribing to the newsletter. Please contact me via amaeduservices@gmail.com and I will add you.",
      });
    }
  };

  return (
    <form
      action={handleSubscribeToNewsletter}
      className="block px-4 min-w-[350px] sm:min-w-[600px] rounded-r-3xl"
      ref={ref}
    >
      <div className="w-full relative ">
        <input
          // type="email"
          className="px-6 py-3 outline-none text-purple-dark rounded-3xl w-full pr-[105px] inline-block"
          placeholder="Enter your email"
          name="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <SubscribeButton />
        {/* <button
          type="submit"
          className="py-3 px-2 sm:px-3 text-purple-light bg-purple-dark rounded-r-3xl font-semibold absolute right-0"
        >
          Subscribe
        </button> */}
      </div>
      {Notification?.type === "success" && (
        <NotificationModal
          message="You have been added to our mailing list. You will be the first to hear about the latest contents from our stable."
          close={() => setNotification(defaultNotification)}
        />
      )}
      {Notification.type === "error" && (
        <ErrorToast
          message={Notification.message}
          close={() => setNotification(defaultNotification)}
        />
      )}
    </form>
  );
};

export default NewsletterForm;
