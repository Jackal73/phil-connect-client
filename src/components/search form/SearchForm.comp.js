import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { filterSearchTicket } from "../../pages/ticket-list/ticketsAction";

export const SearchForm = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;

    dispatch(filterSearchTicket(value));
  };

  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Col sm="9">
            <div>
              <select
                className="shado bold4 mb-2"
                defaultValue=""
                name="searchFrom"
                onChange={(e) => handleOnChange(e)}
              >
                <option value="">"ALL"</option>
                <option value="Chest">Chest</option>
                <option value="Lstl">Lstl</option>
                <option value="Hazel">Hazel </option>
                <option value="Kirk">Kirk</option>
                <option value="Peter">Peter</option>
                <option value="Tele">Tele </option>
                <option value="Fest">Fest </option>
                <option value="Fent">Fent</option>
                <option value="Wrigt">Wrigt</option>
              </select>
            </div>
            {/* <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              placeholder="From Office"
              className="center"
            /> */}
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
