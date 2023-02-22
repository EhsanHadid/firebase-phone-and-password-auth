import { useEffect, useState } from "react";
import { Button, Divider, Form, Input } from "antd";
import {
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../firebase";
import { PhoneNumberInput } from "./phone-input";

declare global {
  interface Window {
    recaptchaVerifier: any;
    recaptchaWidgetId: any;
    confirmationResult: any;
  }
}

export default function PhoneVerification({ codeSent }) {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isPhoneEmpty, setIsPhoneEmpty] = useState<boolean>(true);

  const sendVerificationCode = () => {
    try {
      signInWithPhoneNumber(
        auth,
        phoneNumber,
        new RecaptchaVerifier("recaptcha-container", {}, auth)
      )
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          codeSent();
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Form
        name="basic"
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        onFinish={sendVerificationCode}
        autoComplete="off"
      >
        <Form.Item name="phone">
          <PhoneNumberInput
            phone={phoneNumber}
            setPhone={setPhoneNumber}
            isPhoneEmpty={isPhoneEmpty}
            setIsPhoneEmpty={setIsPhoneEmpty}
          />
        </Form.Item>

        <div id="recaptcha-container" style={{ marginBottom: "20px" }}></div>
        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
          <Button type="primary" htmlType="submit" block>
            Send Verification Code
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
