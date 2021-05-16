import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import { ReactComponent as Logo } from "../assessts/crown.svg";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <Header style={{ height: "66px", marginBottom: '30px' }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={2}>
          <Link>
            <Logo style={{ marginTop: "8px" }} />
          </Link>
        </Col>
        <Col span={8}>
          <Title level={4} style={{color: 'white', marginTop: '15px', paddingLeft: 0}}>Sunpro Logistics</Title>
        </Col>
      </Row>
    </Header>
  );
};

export default observer(AppHeader);
