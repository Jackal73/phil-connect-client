import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Jumbotron,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  closeTicket,
  fetchSingleTicket,
  replyOnTicket,
} from "../../pages/ticket-list/ticketsAction";
import "../../pages/ticket/ticket.style.css";
import { PageBreadcrumb } from "../breadcrumb/Breadcrumb.comp";

export const UpdateTicket = ({ _id, data }) => {
  const { tId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleTicket(tId));
  }, [tId, dispatch]);

  const { selectedTicket, replyMsg, replyTicketError } = useSelector(
    (state) => state.tickets
  );

  const initialValues = {
    _id: selectedTicket._id,
    dateOrdered: selectedTicket.dateOrdered,
    orderedBy: selectedTicket.orderedBy,
    recipient: selectedTicket.recipient,
    zipCode: selectedTicket.zipCode,
    address: selectedTicket.address,
    fileNo: selectedTicket.fileNo,
    status: selectedTicket.status,
    packageContents: selectedTicket.packageContents,
    created: selectedTicket.created,
    receiver: selectedTicket.receiver,
  };

  const [values, setValues] = useState(initialValues);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const {
      _id,
      dateOrdered,
      orderedBy,
      recipient,
      zipCode,
      address,
      fileNo,
      packageContents,
      status,
      created,
      receiver,
    } = values;

    const msgObj = {
      dateOrdered,
      orderedBy,
      recipient,
      zipCode,
      address,
      fileNo,
      packageContents,
      status,
      created,
      receiver,
    };

    dispatch(replyOnTicket(_id, { ...msgObj }));
  };

  // fix javascript date issue
  let dateC = new Date(values.dateOrdered);
  dateC = new Date(dateC.getTime() + dateC.getTimezoneOffset() * 60000);

  let dateOrdered = dateC.toLocaleDateString().substring(0, 10);

  return (
    <Container className="prl-25">
      <Row>
        <Col>
          <PageBreadcrumb
            page="Edit a Request"
            ticket={selectedTicket._id.slice(-4)}
          />
        </Col>
      </Row>
      <Row>
        <Jumbotron className="mt-3 add-new-ticket jumbotron">
          <div className="text-center font-lg bold7 shado text-shadow border freedom-clr mb-4">
            Edit Delivery Request
          </div>
          <div className="center mt-3 mb-4">
            <h6>
              <span className="text-shadow">
                **Request Id's MUST match before edit!
              </span>
              <span className="ml-2 mr-2 text-red pl-1 ">
                {selectedTicket._id.slice(-8)}
              </span>
              :
              <span className="ml-2 text-red pr-1">{values._id.slice(-8)}</span>
            </h6>
          </div>
          <Form
            autoComplete="off"
            onSubmit={handleOnSubmit}
            className="text-shadow"
          >
            <Form.Group as={Row} hidden>
              <Form.Label column sm={6}>
                Status
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  // name="fileNo"
                  value={values.status}
                  // defaultValue="pending"
                  onChange={handleOnChange}
                  style={{
                    borderRadius: ".4rem",
                  }}
                  className="shado"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={6}>
                Request Id
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  value={values._id.slice(-6)}
                  onChange={handleOnChange}
                  style={{
                    borderRadius: ".4rem",
                  }}
                  className="shado"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={6} className="mt-3">
                Request Date
              </Form.Label>
              <Col sm={6}>
                <Form.Text className="freedom-clr">{dateOrdered}</Form.Text>
                <Form.Control
                  type="date"
                  name="dateOrdered"
                  value={values.dateOrdered}
                  onChange={handleOnChange}
                  style={{
                    borderRadius: ".4rem",
                  }}
                  placeholder={selectedTicket.dateOrdered}
                  className="shado mb-1 "
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2} className="">
                Ordered
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  name="orderedBy"
                  value={values.orderedBy}
                  onChange={handleOnChange}
                  style={{
                    borderRadius: ".4rem",
                  }}
                  placeholder="Ordered By"
                  className="shado upper"
                />
              </Col>
              <Form.Label column sm={2} className="">
                Recipient
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  name="recipient"
                  value={values.recipient}
                  onChange={handleOnChange}
                  style={{
                    borderRadius: ".4rem",
                  }}
                  placeholder="Recipient"
                  className="shado upper"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={8} className="mt-3">
                Recipient Zip Code
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  name="zipCode"
                  value={values.zipCode}
                  onChange={handleOnChange}
                  style={{
                    borderRadius: ".4rem",
                  }}
                  placeholder={selectedTicket.zipCode}
                  className="shado mb-3 mt-3"
                />
              </Col>
              <Form.Label column sm={4}>
                Address
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  name="address"
                  value={values.address}
                  onChange={handleOnChange}
                  style={{
                    borderRadius: ".4rem",
                  }}
                  placeholder={selectedTicket.address}
                  className="shado"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={6}>
                File No.
              </Form.Label>
              <Col sm={6}>
                <input
                  name="fileNo"
                  value={values.fileNo}
                  onChange={handleOnChange}
                  style={{
                    borderRadius: ".4rem",
                    width: "310px",
                    height: "37px",
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Contents of Package
              </Form.Label>
              <div className="center">
                {replyTicketError && (
                  <Alert
                    variant="danger"
                    style={{
                      borderRadius: ".8rem",
                      height: "50px",
                      width: "400px",
                      color: "red",
                    }}
                    className="center"
                  >
                    {replyTicketError}
                  </Alert>
                )}
                {replyMsg && (
                  <Alert
                    variant="success"
                    style={{
                      borderRadius: ".8rem",
                      height: "50px",
                      width: "400px",
                      color: "green",
                    }}
                    className="center"
                  >
                    {replyMsg}
                  </Alert>
                )}
                {replyMsg && (
                    <Alert
                      variant="success"
                      style={{
                        borderRadius: ".8rem",
                        height: "50px",
                        width: "400px",
                        color: "green",
                      }}
                      className="center"
                    >
                      {replyMsg}
                    </Alert>
                  ) &&
                  setTimeout(() => {
                    window.location.reload(true);
                  }, 2000)}
              </div>
              <Form.Control
                name="packageContents"
                value={values.packageContents}
                onChange={handleOnChange}
                placeholder={selectedTicket.packageContents}
                className="shado ml-3 mr-3"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label column sm={4}>
                Receiver
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  name="receiver"
                  value={values.receiver}
                  onChange={handleOnChange}
                  style={{
                    borderRadius: ".4rem",
                  }}
                  placeholder={selectedTicket.receiver}
                  className="shado"
                />
              </Col>
            </Form.Group>
            <div className="center">
              <Button
                type="submit"
                className="freedom-grad-rd font-md shado bold6 mt-0 mb-1"
                disabled={selectedTicket._id !== values._id}
              >
                Save Edited Request
              </Button>
            </div>
          </Form>
        </Jumbotron>
      </Row>
    </Container>
  );
};

UpdateTicket.propTypes = {
  _id: PropTypes.string,
};
