import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Button, Card, Divider, Typography, Row, Col } from "antd";
import { GoogleSquareFilled } from "@ant-design/icons";
import PasswordVerification from "./password-verification";
import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PhoneVerification from "./phone-verification";
import CodeVerification from "./code-verification";
import { Register } from "./register";
import { useUser } from "../auth/auth-provider";
// import PhoneVerification from './phone-verification';

const { Title } = Typography;

// const enum SignUpState {
//   ENTER_PHONE,
//   PHONE_VERIFICATION,
//   REGISTER_INFO,
// }

export default function SignUp({ setIsLogin }) {
  // const [state, setState] = useState<SignUpState>(SignUpState.ENTER_PHONE);
  const [verificationId, setVerificationId] = useState();
  const user = useUser();

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Card
        headStyle={{ alignItems: "center" }}
        className="card"
        hoverable
        style={{ minWidth: 355, maxWidth: 355 }}
      >
        <Title level={5} style={{ textAlign: "center", fontFamily: "cursive" }}>
          Sign Up to Fire App
        </Title>

        {!user ? (
          verificationId == null ? (
            <PhoneVerification codeSent={setVerificationId} />
          ) : (
            <CodeVerification verificationId={verificationId} />
          )
        ) : (
          <Register registered={() => setIsLogin(true)} />
        )}
      </Card>

      <Card
        className="card"
        hoverable
        style={{
          display: "flex",
          minWidth: 330,
          marginTop: "10px",
          justifyContent: "center",
        }}
      >
        <p>
          Already have account? <a onClick={() => setIsLogin(true)}>Sign in</a>
        </p>
      </Card>
    </div>
  );
}
