import { Row, Col, Menu, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { enquireScreen } from "enquire-js";
import React from "react";

const LOGO_URL =
  "https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg";

const Header = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [menuMode, setMenuMode] = React.useState("horizontal");

  React.useEffect(() => {
    enquireScreen((b) => {
      setMenuMode(b ? "inline" : "horizontal");
    });
  }, []);

  console.log("menuMode", menuMode);
  const menu = (
    <Menu mode={menuMode} id="nav" key="nav">
      <Menu.Item key="home">
        <a>首页</a>
      </Menu.Item>
      <Menu.Item key="docs">
        <a>
          <span>文档</span>
        </a>
      </Menu.Item>
      <Menu.Item key="components">
        <a>组件</a>
      </Menu.Item>
      {menuMode === "inline" && (
        <Menu.Item key="preview">
          <a
            target="_blank"
            href="http://preview.pro.ant.design/"
            rel="noopener noreferrer"
          >
            预览
          </a>
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <div id="header" className="header">
      {menuMode === "inline" ? (
        <MenuOutlined onClick={() => setMenuVisible(!menuVisible)} />
      ) : null}
      <Row>
        <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
          <div id="logo" to="/">
            <img src={LOGO_URL} alt="logo" />
            <span>ANT DESIGN PRO</span>
          </div>
        </Col>
        <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
          <div className="header-meta">
            <div id="preview">
              <a
                id="preview-button"
                target="_blank"
                href="http://preview.pro.ant.design"
                rel="noopener noreferrer"
              >
                <Button icon="eye-o">预览</Button>
              </a>
            </div>
            {menuMode === "horizontal" ? <div id="menu">{menu}</div> : null}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
