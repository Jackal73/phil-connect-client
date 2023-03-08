import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import philCar from "../../assets/img/philCar.png";
import { SearchForm } from "../../components/search form/SearchForm.comp";
import { TicketTable1 } from "../../components/ticket-table/TicketTable1.comp";
import { fetchAllTickets } from "../ticket-list/ticketsAction";
import { SearchFormM } from "../../components/search form/SearchFormM.comp";

export const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);
  const totalTickets = tickets.length;

  useEffect(() => {
    if (!tickets.length) {
      dispatch(fetchAllTickets());
    }
  }, [tickets, dispatch]);

  return (
    <Container className="prl-25">
      <Col>
        <Row className="mt-3 ml-1"></Row>
      </Col>
      <Row className="phil-border shado blue-back">
        <div
          style={{
            width: "100%",
            fontSize: "1.9rem",
            fontWeight: "bold",
            border: "solid 2px hsl(339, 49%, 30%)",
            borderRadius: "10px",
            display: "",
          }}
          className="text-outline text-center text-shadow  shado p1-1 pr-1"
        >
          <span>𝑡ℎ𝑒 𝑃𝐻𝐼𝐿 𝐶𝑜𝑛𝑛𝑒𝑐𝑡𝑖𝑜𝑛</span>
          <Col sm={12} className="text-center">
            <img src={philCar} alt="" width="180px" className="center" />
          </Col>
        </div>
      </Row>

      <Row className="mt-4">
        <Col className="mt-2  font-lg bold6  center text-grad">
          Dᴇʟɪᴠᴇʀʏ Rᴇ<span style={{ fontSize: "25px" }}>Q</span>ᴜᴇsᴛs
        </Col>
      </Row>
      <Row>
        <Col className="mt-2 bold6 freedom-clr center">Scheduled For</Col>
      </Row>
      <Row>
        <Col className="center freedom-clr bold4 font2x">
          <div>
            <span className="bold6 font3x text-grad">
              {new Date().toLocaleDateString()}
            </span>
          </div>
          {/* <span className="font8">Todays Requests: </span>{" "} */}
          {/* <span className="bold6 font8">{totalTickets}</span> */}
        </Col>
      </Row>
      <Row className="center">
        <Col sm={6} className="center">
          <SearchFormM className="" />
        </Col>
      </Row>
      <Row>
        <Col className="recent-ticket">
          <TicketTable1 tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
