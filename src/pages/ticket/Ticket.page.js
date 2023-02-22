import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { closeTicket, fetchSingleTicket } from "../ticket-list/ticketsAction";
import { resetResponseMsg } from "../ticket-list/ticketsSlice";
import "./ticket.style.css";

import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Jumbotron,
  Row,
  Spinner,
} from "react-bootstrap";

import "./ticket.style.css";

export const Ticket = ({ tickets }) => {
  const { tId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, selectedTicket } = useSelector(
    (state) => state.tickets
  );

  const { replyMsg, replyTicketError } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(fetchSingleTicket(tId));

    return () => {
      (replyMsg || replyTicketError) && dispatch(resetResponseMsg());
    };
  }, [tId, dispatch, replyMsg, replyTicketError]);

  // fix javascript date issue
  let dateD = new Date(selectedTicket.dateOrdered);
  dateD = new Date(dateD.getTime() + dateD.getTimezoneOffset() * 60000);
  let dateOrdered = dateD.toLocaleDateString().substring(0, 10);

  let dateC = new Date(selectedTicket.updatedAt);
  let time = dateC.toLocaleTimeString().substring(0, 10);
  dateC = new Date(dateC.getTime() + dateC.getTimezoneOffset());
  let updated = dateC.toLocaleDateString().substring(0, 10);

  let dateY = new Date(selectedTicket.createdAt);
  let adTime = dateY.toLocaleTimeString().substring(0, 10);
  dateY = new Date(dateY.getTime() + dateY.getTimezoneOffset());
  let adDate = dateY.toLocaleDateString().substring(0, 10);

  let dateE = new Date(selectedTicket.updatedAt);
  dateE = new Date(dateE.getTime() + dateE.getTimezoneOffset() * 60000);

  return (
    <>
      <Container className="">
        <Row>
          <PageBreadcrumb page="Delivery Request" ticket={tId.slice(-4)} />
        </Row>

        <Row className="pl-1 pr-1">
          <Jumbotron className="mt-2 add-new-ticket jumbotron">
            <Row>
              <Col sm={4} className=" pr-5">
                {isLoading && <Spinner variant="primary" animation="border" />}
                {error && <Alert variant="danger">{error}</Alert>}
                {replyTicketError && (
                  <Alert variant="danger">{replyTicketError}</Alert>
                )}
                {replyMsg && <Alert variant="success">{replyMsg}</Alert>}

                {selectedTicket.status === "Connected" ? (
                  <Button
                    style={{ width: "175px", height: "65px" }}
                    className="red bold6 mb-1 ml-2 border-none cur-reg mb-3"
                  >
                    Connected
                  </Button>
                ) : (
                  <Button
                    style={{ width: "175px", height: "65px" }}
                    className="green bold6 mb-1 ml-2 border-none cur-reg mb-3 "
                  >
                    Pending
                  </Button>
                )}
              </Col>

              <Col className=" mb-3 rgt">
                <Link to="/ticket/edit/tid">
                  <Button
                    type="submit"
                    className="freedom-grad-rd shado bold6 mb-2 rgt mr-2"
                    disabled={selectedTicket.status === "Connected"}
                  >
                    Edit This Request
                  </Button>
                </Link>
              </Col>
            </Row>
            {selectedTicket.status === "Connected" && (
              <h6 className="bold center font3x mb-3">
                <span className="text-red">connected:</span> <br />
                {updated}, {time}
              </h6>
            )}
            <div className="text-center font-lg bold7 shado text-shadow border freedom-clr">
              Delivery Request
            </div>
            <hr className="" />

            <Form autoComplete="off" className="text-shadow">
              <Form.Group as={Row}>
                <Form.Label column sm={6}>
                  Request Id
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    value={tId.slice(-4)}
                    className="shado mb-2"
                    readOnly
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={6}>
                  Requested Delivery Date
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    // type="date"
                    name="dateOrdered"
                    value={dateOrdered}
                    className="shado mb-2"
                    readOnly
                  />
                </Col>
              </Form.Group>
              <Form.Text className="bold rgt mb-3">
                <span className="">date ordered: </span>
                {adDate}, {adTime}
              </Form.Text>

              <Form.Group as={Row}>
                <Form.Label column sm={6} className="text-shad-none bold7">
                  Status
                </Form.Label>
                <Col sm={6}>
                  {selectedTicket.status === "Connected" && (
                    <Form.Control
                      value={selectedTicket.status}
                      className="border-red text-black bold8"
                      readOnly
                    />
                  )}{" "}
                  {selectedTicket.status !== "Connected" && (
                    <Form.Control
                      value={selectedTicket.status}
                      className="border-green text-black bold8"
                      readOnly
                    />
                  )}
                </Col>
              </Form.Group>
              {selectedTicket.status === "Connected" && (
                <Form.Text className=" bold rgt pr-2 text-shad-none">
                  connected: {updated}, {time}
                </Form.Text>
              )}

              <Form.Group as={Row}>
                <Form.Label column sm={6} className="text-shad-none bold7">
                  Package Receiver
                </Form.Label>
                <div className="center"></div>
                <Col sm={6}>
                  {selectedTicket.status === "Connected" && (
                    <Form.Control
                      value={selectedTicket.receiver}
                      className="border-red mb-3 text-black bold8"
                      readOnly
                    />
                  )}{" "}
                  {selectedTicket.status !== "Connected" && (
                    <Form.Control
                      value={selectedTicket.receiver}
                      className="border-green mb-3 text-black bold8"
                      readOnly
                    />
                  )}
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Orderer
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    value={selectedTicket.orderedBy}
                    className="shado"
                    readOnly
                  />
                </Col>

                <Form.Label column sm={2}>
                  Recipient
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    value={selectedTicket.recipient}
                    className="shado"
                    readOnly
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Location
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    value={selectedTicket.zipCode}
                    className="shado"
                    readOnly
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Address
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    value={selectedTicket.address}
                    className="shado mb-1"
                    readOnly
                  />
                </Col>

                <Form.Label column sm={4} className="mt-2 bold7">
                  File No.
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    value={selectedTicket.fileNo}
                    className="shado mt-2 text-black bold7"
                    readOnly
                  />
                </Col>
              </Form.Group>
              <div>
                {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
              </div>

              <Form.Group as={Row}>
                <Form.Label column sm={12} className=" text-black bold7">
                  Contents of Package
                </Form.Label>
                <div className="center"></div>
                <Col>
                  <Form.Control
                    value={selectedTicket.packageContents}
                    readOnly
                    className=" text-black bold7"
                  />
                </Col>
              </Form.Group>

              <Row>
                <Col className="text-center">
                  <Button
                    variant="danger shado bold6"
                    onClick={() => {
                      dispatch(closeTicket(tId));

                      setTimeout(() => {
                        window.location.reload(true);
                      }, 2000);
                    }}
                    disabled={selectedTicket.status === "Connected"}
                  >
                    Close Ticket
                  </Button>
                </Col>
              </Row>
            </Form>
          </Jumbotron>
        </Row>

        <hr />
      </Container>
    </>
  );
};
