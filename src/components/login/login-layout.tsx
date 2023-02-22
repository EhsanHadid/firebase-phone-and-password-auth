import { Layout, Col, Row, Typography } from "antd";
import { useState } from "react";
import Login from "./login";
import SignUp from "./signup";
const { Content } = Layout;

const { Title, Paragraph } = Typography;

const LoginLayout = ({ isLogin }) => {
  const [isLoginStatus, setLoginState] = useState<boolean>(isLogin);

  return (
    <Content>
      <Row style={{ height: "100%", alignItems: "center", padding: "14px" }}>
        <Col xs={24} xl={12}>
          <Row>
            <Col span={24}>
              <Title
                style={{
                  textAlign: "center",
                  fontFamily: "cursive",
                }}
                level={2}
              >
                Fire App
              </Title>
            </Col>
            <Col span={24}>
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
          </Row>
        </Col>
        <Col style={{ backgroundColor: "green" }} xs={24} xl={12}>
          <Layout style={{ height: "100%" }}>
            <Content>
              {isLoginStatus ? (
                <Login setIsLogin={setLoginState} />
              ) : (
                <SignUp setIsLogin={setLoginState} />
              )}
            </Content>
          </Layout>
        </Col>
      </Row>
    </Content>
  );
};

export default LoginLayout;
