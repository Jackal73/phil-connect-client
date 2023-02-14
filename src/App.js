import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AdminDashboard } from "./pages/dashboard/AdminDashboard.page";
import { Entry } from "./pages/entry/Entry.page";
import { Registration } from "./pages/registration/Registration.page";
import "./App.css";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
import { UpdateTicket } from "./components/update-ticket/UpdateTicket.comp";
import Excel from "./pages/excel/Excel.page";
import Excel3 from "./pages/excel/Excel3.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { PasswordOtpForm } from "./pages/password-reset/PasswordOtpForm.page";
import { TicketListsAll } from "./pages/ticket-list/TicketListsAll.page";
// import { TicketListsEdit } from "./pages/ticket-list/TicketListsEdit.page";
// import { TicketListsFile } from "./pages/ticket-list/TicketListsFile.page";
import { EditTicket } from "./pages/ticket/EditTicket.page";
import { Ticket } from "./pages/ticket/Ticket.page";
import { UserVerification } from "./pages/user-verification/UserVerification.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/verification/:_id/:email">
            <UserVerification />
          </Route>
          <Route exact path="/reset-password">
            <PasswordOtpForm />
          </Route>

          <PrivateRoute exact path="/adminDashboard">
            <AdminDashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/add-ticket">
            <AddTicket />
          </PrivateRoute>
          <PrivateRoute exact path="/ticket/:tId">
            <Ticket />
          </PrivateRoute>
          <PrivateRoute exact path="/ticket/edit/:tId">
            <EditTicket />
          </PrivateRoute>
          <PrivateRoute exact path="/tickets">
            {/* <TicketListsFile /> */}
          </PrivateRoute>
          <PrivateRoute exact path="/tickets-all">
            <TicketListsAll />
          </PrivateRoute>
          <PrivateRoute exact path="/tickets/edit">
            {/* <TicketListsEdit /> */}
          </PrivateRoute>
          <PrivateRoute exact path="/update">
            <UpdateTicket />
          </PrivateRoute>
          <PrivateRoute exact path="/excel">
            <Excel />
          </PrivateRoute>
          <PrivateRoute exact path="/excel3">
            <Excel3 />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
