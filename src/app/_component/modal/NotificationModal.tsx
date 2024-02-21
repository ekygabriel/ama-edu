import Image from "next/image";
import Modal from "./index";
import { AnuHome, AnuStanding } from "@/assets";
import Button from "@/components/form/Button";

const NotificationModal = ({
  // show,
  message,
  close,
}: {
  // show: boolean;
  message: string;
  close: () => void;
}) => {
  return (
    <Modal
      close={close}
      // show={show}
    >
      <div
        className="max-w-[1000px] flex flex-col items-center gap-6 rounded-lg fixed z-20 bg-white p-6 w-full"
        style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
      >
        <Image
          src={AnuHome}
          width={80}
          height={80}
          className="rounded-full"
          alt="Anuoluwapo"
        />
        <p className="text-center">{message}</p>

        <Button text="Continue" onClick={close} />
      </div>
    </Modal>
  );
};

export default NotificationModal;
