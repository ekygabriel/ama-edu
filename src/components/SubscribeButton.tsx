"use client";

import { useFormStatus } from "react-dom";

const SubscribeButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={
        !pending
          ? "py-3 px-2 sm:px-3 text-purple-light bg-purple-dark rounded-r-3xl font-semibold absolute right-0"
          : "bg-[#e5e5e5] cursor-not-allowed py-3 px-2 sm:px-3 text-gray-600 rounded-r-3xl font-semibold absolute right-0"
      }
      disabled={pending}
    >
      {pending ? "Loading" : "Subscribe"}
    </button>
  );
};

export default SubscribeButton;
