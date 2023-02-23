import { useState } from "react";
import { Button, Form } from "antd";
import {
  fetchSignInMethodsForEmail,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../firebase";
import { PhoneNumberInput } from "./phone-input";
import { convertPhoneToEmail } from "../../helpers/phone-util";

export default function PhoneVerification({ codeSent }) {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isPhoneEmpty, setIsPhoneEmpty] = useState<boolean>(true);

  const sendVerificationCode = async () => {
    setLoading(true);

    try {
      const email = convertPhoneToEmail(phoneNumber);
      const providers = await fetchSignInMethodsForEmail(auth, email);
      if (providers.length == 0) {
        const confirmationResult = await signInWithPhoneNumber(
          auth,
          phoneNumber,
          new RecaptchaVerifier("recaptcha-container", {}, auth)
        );
        codeSent(confirmationResult.verificationId);
      } else {
        // TODO : Show there is an account and try login instead
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
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
        <Button type="primary" htmlType="submit" block loading={loading}>
          Send Verification Code
        </Button>
      </Form.Item>
    </Form>
  );
}
