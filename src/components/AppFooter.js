import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#e36d25",
        color: "#20295c",
        position: "sticky", 
        bottom: "0",
        height: '70px'
      }}
    >
      Sunpro Logistics ©2021 Created by Ant UED
    </Footer>
  );
};

export default AppFooter;