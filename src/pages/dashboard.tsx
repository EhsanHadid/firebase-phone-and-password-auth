import { Avatar, Button, Col, Layout, Row } from "antd";
import { getAuth, signOut } from "firebase/auth";
import { useUser } from "../components/auth/auth-provider";
import { LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Dashboard = () => {
  const user = useUser();
  // console.log(user);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          backgroundColor: "rgb(0 54 124)",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "500",
          height: "60px",
          zIndex: 1000,
        }}
      >
        <h1>This is dashboard</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>{user?.displayName}</span>
          <Avatar
            size="default"
            icon={<LogoutOutlined />}
            onClick={() => signOut(getAuth())}
          />
        </div>
      </Header>
    </Layout>
  );
};
export default Dashboard;
