import { Layout } from "antd";
import LoginLayout from "../components/login/login-layout";
const LoginPage = ({ isLogin }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout style={{ display: "grid", marginTop: 64 }}>
        <LoginLayout isLogin={isLogin} />
      </Layout>
    </Layout>
  );
};

export default LoginPage;
