import { Card, Typography } from "antd";
import PasswordVerification from "./password-verification";
// import PhoneVerification from './phone-verification';

const { Title } = Typography;

export default function Login({ setIsLogin }) {
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
          New to Fire App?{" "}
          <a onClick={() => setIsLogin(false)}>Create an Account</a>
        </p>
      </Card>
    </div>
  );
}
