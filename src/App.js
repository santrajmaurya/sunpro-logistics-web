import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  CarOutlined,
  FilePdfOutlined,
  ContainerOutlined,
  EditOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { observer } from "mobx-react";
import "./App.scss";

import { RootStore } from "./store/RootStore";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import SignIn from "./components/SignIn";
import Booking from "./components/Booking";
import Placement from "./components/Placement";
import Invoice from "./components/Invoice";
import CreateEditUser from './components/CreateEditUser';
import SalesReport from './components/Reports/SalesReport';
import BrokerReport from './components/Reports/BrokerReport';
import BookingReport from './components/Reports/BookingReport';
import InvoiceReport from './components/Reports/InvoiceReport';

const rootStore = new RootStore();
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;


export const RootStoreContext = React.createContext(rootStore);

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <RootStoreContext.Provider value={rootStore}>
      <Router>
        <Layout>
        <Header style={{ position: "fixed", zIndex: 2, width: "100%" }}>
            <AppHeader />
        </Header>
          {isLogin && (
          <Layout
          style={{ minHeight: "calc(100vh - 48px)", marginTop: "60px" }}
          >
          <Sider 
          collapsible 
          className="ui-sider"
          >
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            className="sidebar"
          >
            <Menu.Item key="booking" icon={<EditOutlined />}>
              <span>Booking</span>
              <Link to="/booking" />
            </Menu.Item>
            <Menu.Item key="placement" icon={<CarOutlined />}>
              <span>Placement</span>
              <Link to="/placement" />
            </Menu.Item>
            <Menu.Item key="invoice" icon={<ContainerOutlined />}>
              <span>Invoice</span>
              <Link to="/invoice" />
            </Menu.Item>
            <SubMenu key="sales" icon={<FilePdfOutlined />} title="Reports">
              <Menu.Item key="sales-report">
                <span>Sales</span>
                <Link to="/report/sales" />
              </Menu.Item>
              <Menu.Item key="broker-report">
                <span>Broker</span>
                <Link to="/report/broker" />
              </Menu.Item>
              <Menu.Item key="booking-report">
                <span>Booking</span>
                <Link to="/report/booking" />
              </Menu.Item>
              <Menu.Item key="invoice-report">
                <span>Invoice</span>
                <Link to="/report/invoice" />
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="create-user" icon={<UserAddOutlined />}>
              <span>Create/Edit User</span>
              <Link to="/create-user" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Content
        style={{ padding: '20px', background: "#baebe0" }}
          >
            <Route path="/" exact strict component={() => <Redirect to="/login" />} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/placement" component={Placement} />
            <Route exact path="/invoice" component={Invoice} />
            <Route exact path="/report/sales" component={SalesReport} />
            <Route exact path="/report/broker" component={BrokerReport} />
            <Route exact path="/report/booking" component={BookingReport} />
            <Route exact path="/report/invoice" component={InvoiceReport} />
            <Route path="/create-user" component={CreateEditUser} />
          </Content>
          </Layout>
          )}
      </Layout>
      <Footer>
        <AppFooter />
      </Footer>
    </Router>
    </RootStoreContext.Provider>
  );
};

export default observer(App);
