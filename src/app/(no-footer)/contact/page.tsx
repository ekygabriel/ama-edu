import AppHeader from "@/components/layout/nav";
import ContactForm from "./_components/ContactForm";
import Image from "next/image";
import { BG_Colors } from "@/assets";
import SocialMediaIcons from "@/components/SocialMediaIcons";

const ContactPage = () => {
  return (
    <>
      <AppHeader />
      <div className="mt-32 max-w-lg mx-auto px-6 mb-20 md:flex md:gap-10 md:max-w-5xl OthersLayout relative">
        <Image
          src={BG_Colors}
          alt=""
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            left: "0",
            zIndex: "-1",
          }}
          width={1000}
          height={1000}
        />
        <div className="flex-1 flex flex-col gap-6 md:gap-16 max-w-xl md:max-w-none mx-auto mb-24">
          <h2 className="font-bold text-5xl text-center">Contact Info</h2>
          <div
            className="bg-white px-2 py-6 rounded-3xl opacity-100 z-20"
            style={{ boxShadow: "0px 4px 28.9px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <div className="text-center mb-6">
              <p>You can reach out to me via:</p>
              <p>
                email:{" "}
                <a href="mailto:amaeduservices@gmail.com" target="_blank">
                  amaeduservices@gmail.com
                </a>
              </p>
              <p>
                Phone Number: <a href="tel:+2347066631594">+2347066631594</a>
              </p>

              <p className="mt-10">Mondays to Fridays: 8am - 4pm</p>
              <p>Saturdays: 10am - 2pm</p>
              <p>Sunday: Closed</p>
            </div>
            <SocialMediaIcons
              className="flex gap-2 justify-center z-20"
              linkClass="!text-[#5F3967]"
            />
          </div>
        </div>
        <div className="flex-1 max-w-2xl md:max-w-none mx-auto">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
