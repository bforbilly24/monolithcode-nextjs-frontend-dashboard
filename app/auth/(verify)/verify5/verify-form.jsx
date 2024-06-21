"use client";
import Image from "next/image";
import logo from "@/public/images/logo/logo-1.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import Link from "next/link";

const VerfiyForm = () => {
  const totalOtpField = 6;
  const otpArray = Array.from({ length: totalOtpField }, () => "");
  const [otp, setOtp] = useState(otpArray);
  const otpFields = Array.from({ length: totalOtpField }, (_, index) => index);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value.length === 1 && index < totalOtpField - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
    setOtp(otpArray);
    inputRefs.current[0].focus();
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className="w-full md:w-[480px]">
      <Link href="/dashboard">
        <div className="w-16 h-16">
          <Image src={logo} alt="logo" className="w-full h-full object-cover" />
        </div>
      </Link>
      <div className="mt-8 text-3xl font-bold text-default-900">
        Lock Screen
      </div>
      <div className="text-lg text-default-600 mt-3">
        Enter the information you entered while registering.
      </div>

      <form className="mt-8">
        <div className="flex flex-wrap  gap-1 lg:gap-6">
          {otpFields.map((index) => (
            <Input
              key={`otp-code-${index}`}
              type="text"
              id={`otp${index}`}
              name={`otp${index}`}
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              maxLength={1}
              className="w-12 h-12 sm:w-[60px] sm:h-16 rounded border-default-300 text-center text-2xl font-medium text-default-900"
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
        </div>
        <div className="mt-6">
          <Button
            type="button"
            className="w-full"
            size="lg"
            onClick={handleSubmit}
            disabled={!isOtpComplete}
          >
            Verify Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VerfiyForm;
