import React, { useRef } from "react";
import { Container, Table } from "react-bootstrap";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useSelector } from "react-redux";

export default function Excel({ tickets }) {
  const { searchTicketList } = useSelector((state) => state.tickets);

  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Commission-Statements",
    sheet: "Month Statements",
  });

  return (
    <Container className="excel center mar-top mar-bot">
      <button
        className="mt-3 ml-3 mb-3 btn btn-success form-button shado shado-hov float-left"
        onClick={onDownload}
      >
        Export To Excel
      </button>

      <Table striped hover className="shado mt-2" ref={tableRef}>
        <thead>
          <tr className="hard-back text-white">
            <th>File #</th>
            <th>Funded_On</th>
            <th className="hide">Closed_On</th>
            <th>Closer</th>
            <th className="">Deal_Type</th>
            <th className="">Commission</th>
            <th className="hide">Closer_Two</th>
            <th className="hide">Commish_Cl_Two</th>
            <th className="hide">Mob_Closer</th>
            <th className="hide">Mob_Fee</th>
            <th className="hide">Overage</th>
            <th className="hide">Processor_One</th>
            <th className="hide">Commish_Pr_One</th>
            <th className="hide">Processor_Two</th>
            <th className="hide">Commish_Pr_Two</th>
            <th className="hide">Client_Ref_One</th>
            <th className="hide">Client_Ref_Two</th>
            <th className="hide">Real_Agent_One</th>
            <th className="hide">Real_Agent_Two</th>
            <th className="hide">Ln_Officer</th>
            <th className="hide">Sales_Rep_One</th>
            <th className="hide">Sales_Type_One</th>
            <th className="hide">Sales_Rep_Two</th>
            <th className="hide">Sales_Type_Two</th>
            <th className="hide">Discount</th>
            <th className="hide">Discount_Approval</th>
            <th className="hide">Freedom_Check</th>
            <th className="hide">Message</th>
          </tr>
        </thead>
        <tbody>
          {searchTicketList.length ? (
            searchTicketList
              .slice()
              .reverse()
              .map((row) => (
                <tr key={row._id}>
                  <td className="freedom-clr">{row.fileNo}</td>
                  <td>{row.fundDate.slice(0, 10)}</td>
                  <td className="hide">{row.fundDate.slice(0, 10)}</td>
                  <td>{row.closerOne}</td>
                  <td className="">{row.dealType}</td>
                  <td className="">{row.commishClOne}</td>
                  <td className="hide">{row.closerTwo}</td>
                  <td className="hide">{row.commishClTwo}</td>
                  <td className="hide">{row.mobCloser}</td>
                  <td className="hide">{row.mobFee}</td>
                  <td className="hide">{row.overage}</td>
                  <td className="hide">{row.processorOne}</td>
                  <td className="hide">{row.commishPrOne}</td>
                  <td className="hide">{row.processorTwo}</td>
                  <td className="hide">{row.commishPrTwo}</td>
                  <td className="hide">{row.clientRefOne}</td>
                  <td className="hide">{row.clientRefTwo}</td>
                  <td className="hide">{row.realAgentOne}</td>
                  <td className="hide">{row.realAgentTwo}</td>
                  <td className="hide">{row.lnOfficer}</td>
                  <td className="hide">{row.salesRepOne}</td>
                  <td className="hide">{row.salesTypeOne}</td>
                  <td className="hide">{row.salesRepTwo}</td>
                  <td className="hide">{row.salesTypeTwo}</td>
                  <td className="hide">{row.discount}</td>
                  <td className="hide">{row.discountApproval}</td>
                  <td className="hide">{row.freedomCheck}</td>
                  <td className="hide">{row.message}</td>
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
    </Container>
  );
}
