import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  CarOutlined,
  FilePdfOutlined,
  ContainerOutlined,
  EditOutlined,
  UserAddOutlined,
  FolderAddOutlined,
  SwitcherOutlined,
  BankOutlined,
  IdcardOutlined,
  UserSwitchOutlined,
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
import ConsignorDetails from './components/ConsignorDetails';
import ConsigneeDetails from './components/ConsigneeDetails';
import BrokerDetails from './components/BrokerDetails';
import CompanyDetails from './components/CompanyDetails';
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
        <Layout className="page-container">
        <Header style={{ position: "fixed", zIndex: 2, width: "100%", height: '80px' }}>
            <AppHeader />
        </Header>
          {isLogin && (
          <Layout
          style={{ minHeight: "calc(100vh - 132px)", marginTop: "60px" }}
          >
          <Sider 
          collapsible 
          className="ui-sider"
          // style={{position: "absolute", height: "100vh"}}
          >
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            className="sidebar"
          >
            <Menu.Item key="create-user" icon={<UserAddOutlined />}>
              <span>Create/Edit User</span>
              <Link to="/create-user" />
            </Menu.Item>
            <Menu.Item key="booking" icon={<EditOutlined />}>
              <span>Booking</span>
              <Link to="/booking" />
            </Menu.Item>
            <Menu.Item key="placement" icon={<CarOutlined />}>
              <span>Placement</span>
              <Link to="/placement" />
            </Menu.Item>
            <Menu.Item key="generate-invoice" icon={<FolderAddOutlined />}>
              <span>Generate Invoice</span>
              <Link to="/generate-invoice" />
            </Menu.Item>
            <Menu.Item key="manage-invoice" icon={<ContainerOutlined />}>
                <span>Manage Invoice</span>
                <Link to="/report/manage-invoice" />
            </Menu.Item>
            <Menu.Item key="consignor-details" icon={<SwitcherOutlined />}>
                <span>Consignor Details</span>
                <Link to="/consignor-details" />
            </Menu.Item>
            <Menu.Item key="consignee-details" icon={<UserSwitchOutlined />}>
                <span>Consignee Details</span>
                <Link to="/consignee-details" />
            </Menu.Item>
            <Menu.Item key="broker-details" icon={<IdcardOutlined />}>
                <span>Broker Details</span>
                <Link to="/broker-details" />
            </Menu.Item>
            <Menu.Item key="company-details" icon={<BankOutlined />}>
                <span>Company Details</span>
                <Link to="/company-details" />
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
          </Menu>
        </Sider>
        <Content
        style={{ padding: '30px', background: "white"}}
          >
            <Route path="/" exact strict component={() => <Redirect to="/login" />} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/placement" component={Placement} />
            <Route exact path="/generate-invoice" component={Invoice} />
            <Route exact path="/consignor-details" component={ConsignorDetails} />
            <Route exact path="/consignee-details" component={ConsigneeDetails} />
            <Route exact path="/broker-details" component={BrokerDetails} />
            <Route exact path="/company-details" component={CompanyDetails} />
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
