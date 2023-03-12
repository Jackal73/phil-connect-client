import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterSearchTicketM } from "../../pages/ticket-list/ticketsAction";

export const SearchFormM = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;

    dispatch(filterSearchTicketM(value));
  };

  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Col sm="9">
            <Form.Control
              type="Date"
              name="searchMonth"
              onChange={handleOnChange}
              placeholder="Date"
              className="mt-3 center"
              autoComplete="off"
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
