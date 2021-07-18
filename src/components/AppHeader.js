import React from "react";
import { Row, Col, Button } from "./ant";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react";

import logo from '../assessts/logo1.png'

import "./style.scss";

const AppHeader = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push("/login");
  };

  return (
    <Row sm={24}>
      <Col sm={10}>
        <img
          alt="No logo found"
          className="logo"
          src={logo}
        />
      </Col>
      <Col sm={2} offset={12}>
        <Button
          type="primary"
          size="large"
          danger
          htmlType="submit"
          style={{ cursor: "pointer", marginTop: "18px", width: "100%",  borderColor:'#20295c', background: '#20295c' }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Col>
    </Row>
  );
};

export default observer(AppHeader);
