import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { SearchFormM } from "../../components/search form/SearchFormM.comp";
import { TicketTable2 } from "../../components/ticket-table/TicketTable2.comp";
import { fetchAllTickets } from "./ticketsAction";
import philCar from "../../assets/img/philCar.png";

export const TicketListsAll = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]);

  return (
    <Container className="">
      <Row>
        <Col>
          <PageBreadcrumb page="Delivery Requests" />
        </Col>
      </Row>

      <Row className="mt-1 pl-2 pr-2">
        <div
          style={{
            width: "100%",
            fontSize: "1.9rem",
            fontWeight: "bold",
            border: "solid 2px hsl(339, 49%, 30%)",
            borderRadius: "10px",
            display: "",
            padding: "0 10px",
          }}
          className="text-outline text-center text-shadow blue-back pl-1 pr-1"
        >
          <span>𝑡ℎ𝑒 𝑃𝐻𝐼𝐿 𝐶𝑜𝑛𝑛𝑒𝑐𝑡𝑖𝑜𝑛</span>
          <Col sm={12} className="text-center">
            <img src={philCar} alt="" width="180px" className="center" />
          </Col>
        </div>
        <Col sm={12} className=" text-center mb-4 mt-3">
          <Link to="/add-ticket">
            <Button className="freedom-grad-rd shado bold6">
              Add New Request
            </Button>
          </Link>
        </Col>
      </Row>

      <Row className="mt-2 row-sm">
        <Col className="text-right">
          <SearchFormM />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <TicketTable2 />
        </Col>
      </Row>
    </Container>
  );
};
