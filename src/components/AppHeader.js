import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { observer } from "mobx-react";

import { ReactComponent as Logo } from "../assessts/crown.svg";

const { Title } = Typography;

const AppHeader = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push('/login');
  }
  
  return (
      <Row sm={24}>
        <Col sm={2}>
        <Link>
            <Logo style={{ marginTop: "12px" }} />
          </Link>
        </Col>
        <Col sm={8}>
          <Title level={4} style={{color: 'white', marginTop: '20px', paddingLeft: 0}}>Sunpro Logistics</Title>
        </Col>
        <Col sm={2} offset={12}>
        <Button
            type="primary"
            size="large"
            danger
            htmlType="submit"
            style={{ cursor: "pointer", marginTop: '18px', width: "100%" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Col>
      </Row>
    
  );
};

export default observer(AppHeader);
