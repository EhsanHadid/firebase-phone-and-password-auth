import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useUser } from "../auth/auth-provider";
import { convertPhoneToEmail } from "../../helpers/phone-util";
import { useNavigate } from "react-router-dom";
import {
  EmailAuthProvider,
  linkWithCredential,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "@firebase/auth";
import { auth } from "../../firebase";

export const Register = ({ registered }) => {
  const user = useUser();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    const fullname = values["full_name"];
    const password = values["password"];
    if (user && user.phoneNumber) {
      const email = convertPhoneToEmail(user.phoneNumber);
      console.log(email);
      const credential = EmailAuthProvider.credential(email, password);
      linkWithCredential(user, credential).then((userCred) => {
        updateProfile(userCred.user, {
          displayName: fullname,
        }).then(() => {
          signOut(auth);
          registered();
        });
      });
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="FullName"
        name="full_name"
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
