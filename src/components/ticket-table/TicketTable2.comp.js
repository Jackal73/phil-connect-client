import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TablePagination } from "@mui/material";

export const TicketTable2 = ({ tickets }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );

  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <h3>{error}</h3>;

  const totalTickets = searchTicketList.length;
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Table striped hover className="shado mt-2 border">
        <thead>
          <tr className="hard-back text-white">
            <th className="">Req.#</th>
            <th className="">Date</th>
            <th className="">Location</th>
            <th className="">Address</th>
            <th className="">Status</th>
          </tr>
        </thead>
        <tbody>
          {searchTicketList.length ? (
            searchTicketList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .reverse()
              .map((row) => (
                <tr key={row._id}>
                  <td>
                    <Link to={`/ticket/${row._id}`} className="link-grad">
                      {row._id.slice(-4)}
                    </Link>
                  </td>

                  <td>
                    {row.dateOrdered.slice(5, 10)}-{row.dateOrdered.slice(0, 4)}
                  </td>
                  <td>{row.zipCode}</td>

                  <td className="">{row.address}</td>
                  <td className="">
                    {row.status === "Connected" ? (
                      <Button className="red bold6 mb-1 ml-2 pl-1 pr-1 pt-0 pb-0 noBorder border">
                        Conn
                      </Button>
                    ) : (
                      <Button className="green bold6 mb-1 ml-2 pl-1 pr-1 pt-0 pb-0 noBorder border">
                        Pend
                      </Button>
                    )}
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No tickets to show{""}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <div className="mt-paginate">
        <TablePagination
          rowsPerPageOptions={[5, 25, 100, 250, 1000, 2000]}
          component="div"
          count={totalTickets}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className="pagination-bar"
        />
      </div>
    </>
  );
};
