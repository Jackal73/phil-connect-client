import React from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ticket-table.style.css";

export const TicketTable1 = ({ tickets }) => {
  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );
  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <h3>{error}</h3>;

  console.log(new Date().toLocaleDateString().slice(0, 10));

  return (
    <>
      <Table striped className="shado mt-2 border p-0 font3x">
        <thead>
          <tr className="hard-back text-white">
            <th className="">Date</th>
            <th className="">Status</th>
            <th className="">From</th>
            <th className="">To</th>
            <th className="">Address</th>
          </tr>
        </thead>
        <tbody>
          {searchTicketList.length ? (
            searchTicketList
              .slice(-80)
              .reverse()
              .map((row) => (
                <tr key={row._id}>
                  <>
                    <td>
                      <Link
                        to={`/ticket/${row._id}`}
                        className="link-grad bold6"
                      >
                        {row.dateOrdered.slice(8, 10)}
                      </Link>
                    </td>
                    <td className="">
                      {row.status === "Connected" ? (
                        <Button className="red bold6 mb-1 ml-2 pl-2 pr-2 pt-0 pb-0 noBorder rad">
                          C
                        </Button>
                      ) : (
                        <Button className="green bold6 mb-1 ml-2 pl-2 pr-2 pt-0 pb-0 noBorder rad">
                          P
                        </Button>
                      )}
                    </td>
                    <td>{row.from}</td>

                    <td className="">{row.zipCode}</td>
                    <td className="">{row.address}</td>
                  </>
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
    </>
  );
};
