import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  Jumbotron,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { shortText } from "../../utils/validation";
import "./add-ticket-form.style.css";
import { openNewTicket } from "./addTicketAction";
import { resetSuccessMsg } from "./addTicketSlicer";

const initialFrmData = {
  dateOrdered: new Date().toLocaleDateString(),
  orderedBy: "",
  recipient: "",
  address: "",
  zipCode: "",
  fileNo: "",
  packageContents: "",
  status: "Pending",
  created: "",
  receiver: "",
};

const initialFrmError = {
  // clientId: false,
  dateOrdered: "false",
  orderedBy: "false",
  recipient: "false",
  address: "false",
  zipCode: "false",
  status: "false",
  receiver: "false",
  // fileNo: "false",
  // packageContents: "false",
};

export const AddTicketForm = () => {
  const dispatch = useDispatch();

  const { isLoading, error, successMsg } = useSelector(
    (state) => state.openTicket
  );

  const [frmData, setFrmData] = useState(initialFrmData);
  const [frmError, setFrmError] = useState(initialFrmError);

  useEffect(() => {
    return () => {
      successMsg && dispatch(resetSuccessMsg());
    };
  }, [dispatch, frmData, frmError, successMsg]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmError(initialFrmError);

    const isDateOrderedValid = await shortText(frmData.dateOrdered);
    const isOrderedByValid = await shortText(frmData.orderedBy);
    const isRecipientValid = await shortText(frmData.recipient);
    const isAddressValid = await shortText(frmData.address);
    const isZipCodeValid = await shortText(frmData.zipCode);
    // const isFileNoValid = await shortText(frmData.fileNo);
    // const isPackageContentsValid = await shortText(frmData.packageContents);
    const isStatusValid = await shortText(frmData.status);
    const isReceiverValid = await shortText(frmData.receiver);

    setFrmError({
      ...initialFrmError,
      dateOrdered: !isDateOrderedValid,
      orderedBy: !isOrderedByValid,
      recipient: !isRecipientValid,
      isAddressValid: !isAddressValid,
      zipCode: !isZipCodeValid,
      // fileNo: !isFileNoValid,
      // packageContents: !isPackageContentsValid,
      status: !isStatusValid,
      receiver: !isReceiverValid,
    });

    dispatch(openNewTicket({ ...frmData }));
  };

  // console.log(frmData.input);

  return (
    <Jumbotron className="mt-3 add-new-ticket jumbotron">
      <h1 className="text-center shado text-shadow-w freedom-grad mb-4 pt-2 pb-2 wite border1">
        <span className="opacity">Delivery Request</span>
      </h1>

      <Form
        autoComplete="off"
        onSubmit={handleOnSubmit}
        className="shado p-3"
        style={{ borderRadius: "5px", marginTop: "40px" }}
      >
        <Form.Group as={Row} className="freedom-clr hidden">
          <Form.Label column sm={6} className="mt-1 text-shadow">
            Connected @
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              name="created"
              value="PENDING"
              maxLength="12"
              onChange={handleOnChange}
              placeholder=""
              // required

              className=" mt-1"
            />
            <Form.Text className="text-danger center">
              {!frmData.status && "Status is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="freedom-clr hidden">
          <Form.Label column sm={6} className="mt-1 text-shadow">
            Status
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              name="status"
              value="PENDING"
              maxLength="12"
              onChange={handleOnChange}
              placeholder="PENDING"
              className=" mt-1"
            />
            <Form.Text className="text-danger center">
              {!frmData.status && "Status is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="freedom-clr text-shadow hidden">
          <Form.Label column sm={6}>
            Receiver
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              name="receiver"
              value={frmData.receiver}
              onChange={handleOnChange}
              placeholder="Receiver"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={6} className="freedom-clr mt-2 text-shadow">
            Request Date
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="date"
              name="dateOrdered"
              value={frmData.dateOrdered}
              maxLength="20"
              onChange={handleOnChange}
              placeholder="Date Ordered"
              required
              className="shado mt-2 bold4"
            />
            <Form.Text className="center text-danger">
              {!frmData.dateOrdered && "Request Date is required"}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2} className="freedom-clr text-shadow">
            Orderer
          </Form.Label>
          <Col sm={4}>
            <div>
              <select
                className="shado select"
                defaultValue=""
                name="orderedBy"
                required
                onChange={(e) => handleOnChange(e)}
              >
                <option value="" disabled hidden className=""></option>
                <option value="ALICIA">ALICIA</option>
                <option value="AMANDA">AMANDA</option>
                <option value="BRE">BRE</option>
                <option value="DEBBIE">DEBBIE</option>
                <option value="DELANEY">DELANEY</option>
                <option value="ERIN">ERIN</option>
                <option value="JESSICA">JESSICA</option>
                <option value="KADI">KADI</option>
                <option value="KIMBERLY">KIMBERLY</option>
                <option value="KRISTIN">KRISTIN</option>
                <option value="MELISSA">MELISSA</option>
                <option value="MICHELLE">MICHELLE</option>
                <option value="NICHOLE">NICHOLE</option>
                <option value="REBECCA">REBECCA</option>
                <option value="ROBYN">ROBYN</option>
                <option value="STEPHANIE">STEPHANIE</option>
                <option value="SUZY">SUZY</option>
                <option value="TERI">TERI</option>
              </select>
            </div>
            <Form.Control
              name="orderedBy"
              value={frmData.orderedBy}
              maxLength="20"
              onChange={handleOnChange}
              placeholder="Ordered By"
              required
              className="shado mt-1"
            />
            <Form.Text className="text-danger center">
              {!frmData.orderedBy && "Ordered By is required"}
            </Form.Text>
          </Col>

          <Form.Label column sm={2} className="freedom-clr text-shadow">
            Recipient
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              name="recipient"
              value={frmData.recipient}
              maxLength="20"
              onChange={handleOnChange}
              placeholder="Recipient"
              required
              className="shado mt-1"
            />
            <Form.Text className="text-danger center">
              {!frmData.recipient && "Recipient is required"}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="freedom-clr ">
          <Form.Label column sm={8} className="mt-1 text-shadow">
            Recipient Location
          </Form.Label>
          <Col sm={4}>
            <div>
              <select
                className="shado bold4 mb-2"
                defaultValue=""
                name="zipCode"
                required
                onChange={(e) => handleOnChange(e)}
              >
                <option className="" value="ENTRY">
                  "NEW ENTRY"
                </option>
                <option value="Festus Office">FESTUS OFFICE</option>
                <option value="Hazelwood Office">HAZELWOOD OFFICE</option>
                <option value="Kirkwood Office">KIRKWOOD OFFICE</option>
                <option value="MANCHESTER OFFICE">MANCHESTER OFFICE</option>
                <option value="St. Peters Office">ST. PETERS OFFICE</option>
                <option value="Telegraph Office">TELEGRAPH OFFICE</option>
                <option value="Investors Title">INVESTORS TITLE</option>
                <option value="Guild Mortgage">GUILD MORTGAGE</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <Form.Control
              name="zipCode"
              value={frmData.zipCode}
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Location"
              required
              className="shado border-2 mt-1"
            />
            <Form.Text className="text-danger center">
              {!frmData.zipCode && "Zip Code is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="freedom-clr ">
          <Form.Label column sm={4} className="freedom-clr text-shadow mt-1">
            Recipient Address
          </Form.Label>
          <Col sm={8}>
            <div>
              <select
                className="shado bold4 mb-2"
                defaultValue=""
                name="address"
                required
                onChange={(e) => handleOnChange(e)}
              >
                <option className="" value="ENTRY">
                  "NEW ENTRY"
                </option>
                <option value="1897 Richardson Arnold MO 63010">
                  1897 RICHARDSON, ARNOLD MO 63010
                </option>
                <option value="17280 N Outer Forty Rd Suite 101">
                  17280 N OUTER FORTY RD, SUITE 101
                </option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <Form.Control
              name="address"
              value={frmData.address}
              minLength="2"
              onChange={handleOnChange}
              placeholder="Address"
              required
              className="shado mt-1"
            />
            <Form.Text className="text-danger center">
              {!frmData.address && "Address is required"}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="freedom-clr text-shadow">
          <Form.Label column sm={4}>
            File No.
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              name="fileNo"
              value={frmData.fileNo}
              onChange={handleOnChange}
              placeholder="File No."
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={4} className="freedom-clr">
            Contents of Package
          </Form.Label>
          <div className="center">
            {error && <Alert variant="danger">{error}</Alert>}
            {successMsg && <Alert variant="success">{successMsg}</Alert>}
            {successMsg && <Alert variant="success">{successMsg}</Alert> &&
              setTimeout(() => {
                window.location.reload(true);
              }, 2000)}
            {isLoading && <Spinner variant="primary" animation="border" />}
          </div>

          <Form.Control
            name="packageContents"
            value={frmData.packageContents}
            onChange={handleOnChange}
            placeholder=" ..."
            required
            className="shado ml-3 mr-3"
          />
          <Form.Text className="text-danger ml-3">
            {!frmData.packageContents && "Contents of Package is required"}
          </Form.Text>
        </Form.Group>

        <div className="center">
          <Button
            style={{ fontSize: "1.3rem", padding: "5px 10px" }}
            type="submit"
            className="freedom-grad-rd shado bold6 mt-1 mb-1 mr-3"
          >
            Add Request
          </Button>
        </div>
      </Form>
    </Jumbotron>
  );
};
