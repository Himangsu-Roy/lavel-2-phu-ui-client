import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;

import { Outlet } from "react-router-dom";
import { adminPaths } from "../../routes/admin.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import Sidebar from "./Sidebar";

// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));



const MainLayout = () => {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar/>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
          // style={{
          //   padding: 24,
          //   minHeight: 360,
          // //   background: colorBgContainer,
          // //   borderRadius: borderRadiusLG,
          // }}
          >
            <Outlet />
          </div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
