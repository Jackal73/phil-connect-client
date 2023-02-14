import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const PageBreadcrumb = ({ page, ticket, info, ticket1 }) => {
  return (
    <Breadcrumb>
      <LinkContainer to="/">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </LinkContainer>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
      <Breadcrumb.Item>
        {info}
        {ticket}
      </Breadcrumb.Item>
      {/* <Breadcrumb.Item>{ticket1}</Breadcrumb.Item> */}
      {/* <Breadcrumb.Item>{ticket}</Breadcrumb.Item> */}
    </Breadcrumb>
  );
};
