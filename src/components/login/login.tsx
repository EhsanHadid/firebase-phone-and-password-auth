import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Button, Card, Divider, Typography, Row, Col } from "antd";
import { GoogleSquareFilled } from "@ant-design/icons";
import PasswordVerification from "./password-verification";
// import PhoneVerification from './phone-verification';

const { Title } = Typography;

export default function Login() {
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
        style={{ minWidth: 330, maxWidth: 330 }}
      >
        <Title level={5} style={{ textAlign: "center", fontFamily: "cursive" }}>
          Sign in to Fire App
        </Title>
        <PasswordVerification />
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
          New to Fire App? <a>Create an Account</a>
        </p>
      </Card>
    </div>
  );
}

// <Divider style={{ marginTop: 40 }}>Or Use Your Email </Divider>
// <div style={{ padding: "0px 20px" }}>
//   {/* <PhoneVerification /> */}
//   login with email
// </div>
