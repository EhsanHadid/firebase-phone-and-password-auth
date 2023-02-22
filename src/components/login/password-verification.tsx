import { useState } from "react";
import { Button, Divider, Form, Input } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import PhoneInput from "react-phone-number-input";
import { convertPhoneToEmail } from "../../helpers/phone-util";
import { PhoneNumberInput } from "./phone-input";

export default function PasswordVerification() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isPhoneEmpty, setIsPhoneEmpty] = useState<boolean>(true);

  const signIn = (values: any) => {
    const password = values["password"];
    const email = convertPhoneToEmail(phoneNumber);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log("not found", error.message);
      });
  };

  return (
    <>
      <Form
        name="basic"
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        onFinish={signIn}
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

        <Form.Item name="password">
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
          <Button type="primary" htmlType="submit" block>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
