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
            <div>
              <select
                className="shado bold4 mb-2"
                defaultValue=""
                name="searchFrom"
                onChange={(e) => handleOnChange(e)}
              >
                <option className="" value="ENTRY">
                  "NEW ENTRY"
                </option>
                <option value="Fest">FESTUS </option>
                <option value="Hazel">HAZELWOOD </option>
                <option value="Kirk">KIRKWOOD</option>

                <option value="Peter">ST. PETERS</option>
                <option value="Tele">TELEGRAPH </option>
                <option value="Chest">Chest</option>
                <option value="Guild Mortgage">GUILD MORTGAGE</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            {/* <Form.Control
              type="text"
              name="searchStr"
              onChange={handleOnChange}
              placeholder="Search 'From'"
              className="mt-3 center"
              autoComplete="off"
            /> */}
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
