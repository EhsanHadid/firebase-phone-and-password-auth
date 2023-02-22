import { useState } from "react";
import { Button, Form, Input } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { convertPhoneToEmail } from "../../helpers/phone-util";
import { PhoneNumberInput } from "./phone-input";

export default function PasswordVerification() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(true);

  const handleSignIn = async (values) => {
    const { password } = values;
    const email = convertPhoneToEmail(phoneNumber);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
    } catch (error) {
      console.log("not found", error);
    }
  };

  return (
    <Form onFinish={handleSignIn}>
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

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
}
