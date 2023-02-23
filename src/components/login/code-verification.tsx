import { PhoneAuthProvider, signInWithCredential } from "@firebase/auth";
import { Button, Form, Input, Typography } from "antd";
import { auth } from "../../firebase";
const { Text } = Typography;

export default function CodeVerification({ verificationId }) {
  const verifyCode = ({ code }) => {
    const credential = PhoneAuthProvider.credential(verificationId, code);
    signInWithCredential(auth, credential).then((userCredential) => {
      console.log(userCredential);
    });
  };

  return (
    <>
      <Form
        name="basic"
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        onFinish={verifyCode}
        autoComplete="off"
      >
        <Form.Item
          name="code"
          extra={
            <Text style={{ marginTop: "200px" }}>
              Please enter the 6 digit code has been sent to your phone here.
              <br /> didn't recieved?:
              <Button type="link" size="small" target="_blank">
                Resend Code
              </Button>
            </Text>
          }
        >
          <Input maxLength={6} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
          <Button type="primary" htmlType="submit" block>
            Verifiy
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
