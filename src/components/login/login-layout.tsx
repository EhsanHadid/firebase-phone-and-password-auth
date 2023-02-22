import { Layout, Col, Row, Typography } from "antd";
import { useState } from "react";
import Login from "./login";
import SignUp from "./signup";
const { Content } = Layout;

const { Title, Paragraph } = Typography;

const LoginLayout = ({ isLogin }) => {
  const [isLoginStatus, setLoginState] = useState(isLogin);

  return (
    <Content>
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col xs={24} md={12}>
          <Title
            level={2}
            style={{ textAlign: "center", fontFamily: "cursive" }}
          >
            Fire App
          </Title>
          <Paragraph
            style={{
              textAlign: "center",
              fontSize: "1rem",
              fontFamily: "cursive",
            }}
          >
            Welcome to FireApp application
          </Paragraph>
        </Col>
        <Col xs={24} md={12} style={{ backgroundColor: "green" }}>
          {isLoginStatus ? (
            <Login setIsLogin={setLoginState} />
          ) : (
            <SignUp setIsLogin={setLoginState} />
          )}
        </Col>
      </Row>
    </Content>
  );
};

export default LoginLayout;
