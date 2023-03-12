import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterSearchTicketF } from "../../pages/ticket-list/ticketsAction";

export const SearchFormF = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;

    dispatch(filterSearchTicketF(value));
  };

  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Col sm="9">
            <Form.Control
              name="searchFrom"
              onChange={handleOnChange}
              placeholder="Search 'From'"
              className="mt-3 center"
              autoComplete="off"
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
