import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterSearchTicketM } from "../../pages/ticket-list/ticketsAction";
// import "./search-form.style.css"

export const SearchFormM = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;

    dispatch(filterSearchTicketM(value));
    // console.log(res.data)
  };

  // const ticketMonth =

  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          {/* <Form.Label column sm="3" className="mt-3 freedom-clr font-italic">
            Search:
          </Form.Label> */}
          <Col sm="9">
            <Form.Control
              type="Date"
              name="searchMonth"
              onChange={handleOnChange}
              placeholder=""
              className="mt-3 center"
              autoComplete="off"
              // className="placeholder-month"
            />
            <h6 className="font6 mr-3 rgt">
              *Press the Calendar Icon for Dates ^
            </h6>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
