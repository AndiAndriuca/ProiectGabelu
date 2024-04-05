import React from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const WelcomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancelModal = () => {
    setIsModalOpen(false);
  };
  const navigate = useNavigate();
  return (
    <div className="layout-container">
      <div className="container1">
        <p>Make your programe!!!</p>
        <p>Make your programe!!!</p>
        <p>Make your programe!!!</p>
        <p>Make your programe!!!</p>
        <p>Make your programe!!!</p>
      </div>
      <div className="container2">
        <div className="full-weight">
          <div>
            <h1 className="welcome-h1">Welcome Back !!!</h1>
          </div>
          <div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  className="input-login"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  className="input-login"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item className="blabla">
                <div className="remember-and-forgot">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox className="remember-checkbox">
                      Remember me
                    </Checkbox>
                  </Form.Item>
                  <div>
                    <a
                      style={{ color: "blueviolet" }}
                      className="login-form-forgot"
                      href=""
                    >
                      Forgot password
                    </a>
                  </div>
                </div>
              </Form.Item>

              <Button className="login-button" type="primary" htmlType="submit">
                Log in
              </Button>

              <Button
                style={{ marginTop: "14px" }}
                className="login-button"
                type="primary"
                htmlType="submit"
                onClick={showModal}
              >
                Sign up
              </Button>

              <Modal
                title="Be a member"
                open={isModalOpen}
                onCancel={handleCancelModal}
                footer={null}
              >
                <h1 style={{ textAlign: "center" }}>Sign up </h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    marginLeft: "60px",
                    marginRight: "60px",
                  }}
                >
                  <Button
                    onClick={() => navigate("/SignUpUser")}
                    type="primary"
                  >
                    User
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => navigate("/SignUpCompany")}
                  >
                    Company
                  </Button>
                </div>
              </Modal>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
