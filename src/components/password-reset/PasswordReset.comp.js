import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordResetOtp } from "./passwordAction";
import { Button, Col, Container, Form, Row, Alert, Spinner } from 'react-bootstrap';

export const ResetPassword = () => {

  const dispatch = useDispatch();

	const [email, setEmail] = useState("");

	const { isLoading, status, message } = useSelector(state => state.password);

	const handleOnResetSubmit = e => {
		e.preventDefault();

		dispatch(sendPasswordResetOtp(email));
	};

	const handleOnChange = e => {
		const { value } = e.target;
		setEmail(value);
	};

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-grad text-center">Reset Password</h1>
          <hr />
          {message && (
						<Alert variant={status === "success" ? "success" : "danger"}>
							{message}
						</Alert>
					)}

					{isLoading && <Spinner variant="primary" animation="border" />}
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label className="text-grad">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>


            <div className="center">
            <Button type="submit" className="freedom-grad-rd shado bold6">Reset Password</Button>
            </div>
          </Form>
          <hr />
        </Col>
      </Row>

      {/* <Row>
        <Col className="">
          <a href="/password-reset">enter pin</a>
        </Col>
      </Row> */}
    </Container>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,

  email: PropTypes.string
}
