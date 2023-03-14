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
  officeFrom: "",
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
  officeFrom: "false",
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
    const isOfficeFromValid = await shortText(frmData.officeFrom);
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
      officeFrom: !isOfficeFromValid,
      // fileNo: !isFileNoValid,
      // packageContents: !isPackageContentsValid,
      status: !isStatusValid,
      receiver: !isReceiverValid,
    });

    dispatch(openNewTicket({ ...frmData }));
  };

  return (
    <Jumbotron className="mt-3 add-new-ticket jumbotron">
      <h1 className="text-center shado text-shadow-w freedom-grad mb-4 pt-2 pb-2 wite border1">
        <span className="opacity">Delivery Request</span>
      </h1>
      <div className="center font3x mb-3 text-red border1">
        **When sending from FT office( i.e."Telegraph" ) to FT office(
        i.e."Kirkwood" ),
        <br /> use
        <span className="text-grad text-shadow bold">
          {" "}
          ( "Telegraph to Kirkwood" )
        </span>{" "}
        as the
        <b>
          <em className="text-grad text-shadow"> Recipient Address**</em>.
        </b>
        <br /> <i className="">Do not use the actual address</i>{" "}
      </div>

      <Form
        autoComplete="off"
        onSubmit={handleOnSubmit}
        className="shado p-3"
        style={{ borderRadius: "5px", marginTop: "24px" }}
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
          <Form.Label column sm={4} className="freedom-clr mt-2 text-shadow">
            Date To Be <span className="text-red bold8">Delivered</span>
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              type="date"
              name="dateOrdered"
              value={frmData.dateOrdered}
              maxLength=""
              onChange={handleOnChange}
              placeholder="Delivery Date"
              required
              className="shado mt-2 bold8 ctr center freedom-clr"
            />
            <Form.Text className="center text-danger">
              {frmData.dateOrdered === new Date().toLocaleDateString() &&
                "'Date To Be Delivered' is required"}
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
                className="shado select center"
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
                <option value="KRISTA">KRISTA</option>
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
            <Form.Text className="text-danger center">
              {!frmData.orderedBy && "'Orderer' is required"}
            </Form.Text>
          </Col>
          <Form.Label column sm={2} className="freedom-clr text-shadow">
            FT Pickup Office
          </Form.Label>
          <Col sm={4}>
            <div>
              <select
                className="shado bold4 mb-2 center"
                defaultValue=""
                name="officeFrom"
                required
                onChange={(e) => handleOnChange(e)}
              >
                <option className="" value="ENTRY">
                  "NEW ENTRY"
                </option>
                <option value="Chest">FT-CHESTERFIELD OFFICE</option>
                <option value="Fentn">FT-FENTON OFFICE</option>
                <option value="Fest">FT-FESTUS OFFICE</option>
                <option value="Hazel">FT-HAZELWOOD OFFICE</option>
                <option value="Kirk">FT-KIRKWOOD OFFICE</option>
                <option value="Lstl">FT-LAKE ST.LOUIS OFFICE</option>
                <option value="Peter">FT-ST.PETERS OFFICE</option>
                <option value="Tele">FT-TELEGRAPH OFFICE</option>
                <option value="Wrigt">FT-WRIGHT CITY OFFICE</option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>

            <Form.Text className="text-danger center">
              {!frmData.officeFrom && "'FT Pickup Office' is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="freedom-clr text-shadow ">
          <Form.Label column sm={2} className="freedom-clr text-shadow">
            Recipient's Name
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              name="recipient"
              value={frmData.recipient}
              maxLength="20"
              onChange={handleOnChange}
              placeholder="Recipient's name"
              required
              className="shado mt-1 center"
            />
            <Form.Text className="text-danger center">
              {!frmData.recipient && "'Recipient' is required"}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="freedom-clr ">
          <Form.Label column sm={8} className="mt-1 text-shadow">
            Recipient's <span className="text-red bold8">Company Name</span>
            <span className="text-red font2x"></span>
          </Form.Label>

          <Col sm={4}>
            <div>
              <select
                className="shado bold4 mb-2 center"
                defaultValue=""
                name="zipCode"
                required
                onChange={(e) => handleOnChange(e)}
              >
                <option className="" value="ENTRY">
                  "NEW ENTRY"
                </option>
                <option value="FT-Chesterfield">FT-CHESTERFIELD OFFICE</option>
                <option value="FT-Fenton">FT-FENTON OFFICE</option>
                <option value="FT-Festus">FT-FESTUS OFFICE</option>
                <option value="FT-Hazelwood">FT-HAZELWOOD OFFICE</option>

                <option value="FT-Kirkwood">FT-KIRKWOOD OFFICE</option>
                <option value="FT-Lake St.Louis">
                  FT-LAKE ST.LOUIS OFFICE
                </option>
                <option value="FT-St. Peters">FT-ST. PETERS OFFICE</option>
                <option value="FT-Telegraph">FT-TELEGRAPH OFFICE</option>
                <option value="FT-Wright City">FT-WRIGHT CITY OFFICE</option>
                <option value="Investors Title">Investors Title</option>
                <option value="Keller Williams">Keller Williams</option>
                <option value="Keller Williams Chesterfield">
                  Keller Williams Chesterfield
                </option>
                <option value="Keller Williams StL">Keller Williams StL</option>
              </select>
            </div>

            <Form.Control
              name="zipCode"
              value={frmData.zipCode}
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Company Name"
              required
              className="shado border-2 mt-1 center label-soft"
            />

            <Form.Text className="text-danger center">
              {!frmData.zipCode && "'Company Name' is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="freedom-clr ">
          <Form.Label
            column
            sm={4}
            className="text-grad bold7 text-shadow mt-1"
          >
            Recipient Address**
          </Form.Label>
          <Col sm={8}>
            <div>
              <select
                className="shado bold4 mb-2 center"
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
                <option value="16401 Swingley Ridge Rd., Ste. 200, Chesterfield, MO 63017">
                  16401 Swingley Ridge Rd., Ste. 200, Chesterfield, MO 63017
                </option>
                <option value="1717 Hidden Creek Ct., St. Louis, MO 63131">
                  1717 Hidden Creek Ct., St. Louis, MO 63131
                </option>
                <option value="4706 Hampton Ave., St. Louis mo 63109">
                  4706 Hampton Ave., St. Louis MO 63109
                </option>
                <option value="Lake St.Louis to Chesterfield">
                  Lake St.Louis to Chesterfield
                </option>
                <option value="St.Peters to Chesterfield">
                  St.Peters to Chesterfield
                </option>
                <option value="Kirkwood to Chesterfield">
                  Kirkwood to Chesterfield
                </option>
                <option value="Hazelwood to Chesterfield">
                  Hazelwood to Chesterfield
                </option>
                <option value="Fenton to Chesterfield">
                  Fenton to Chesterfield
                </option>
                <option value="Telegraph to Chesterfield">
                  Telegraph to Chesterfield
                </option>
                <option value="Wright City to Chesterfield">
                  Wright City to Chesterfield
                </option>
              </select>
            </div>
            <Form.Control
              name="address"
              value={frmData.address}
              minLength="2"
              onChange={handleOnChange}
              placeholder="Address"
              required
              className="shado mt-1 center label-soft"
            />
            <Form.Text className="text-danger center">
              {!frmData.address && "'Address' is required"}
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
              className="mt-1 label-soft"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={4} className="freedom-clr">
            Contents of 'Package'
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
            className="shado ml-3 mr-3 label-soft"
          />
          <Form.Text className="text-danger ml-3">
            {!frmData.packageContents && "'Contents of Package' is required"}
          </Form.Text>
        </Form.Group>

        <div className="center mb-3">
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
