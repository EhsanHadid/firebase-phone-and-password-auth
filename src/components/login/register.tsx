import { Button, Form, Input } from "antd";
import { useUser } from "../auth/auth-provider";
import { convertPhoneToEmail } from "../../helpers/phone-util";
import {
  EmailAuthProvider,
  linkWithCredential,
  signOut,
  updateProfile,
} from "@firebase/auth";
import { auth } from "../../firebase";

export const Register = ({ registered }) => {
  const user = useUser();

  const registerFormHandler = async ({ fullname, password }) => {
    if (user && user.phoneNumber) {
      const email = convertPhoneToEmail(user.phoneNumber);
      const credential = EmailAuthProvider.credential(email, password);
      const userCred = await linkWithCredential(user, credential);
      await updateProfile(userCred.user, {
        displayName: fullname,
      });
      await signOut(auth);
      registered();
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={registerFormHandler}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="FullName"
        name="fullname"
        rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
