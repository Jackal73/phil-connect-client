import React from "react";
import { useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";
import { UpdatePasswordForm } from "../../components/password-reset/UpdatePasswordForm.comp";
import { HeaderEntry } from "../../layout/partials/HeaderEntry.comp";
import "./PasswordOtpForm.style.css";

export const PasswordOtpForm = () => {
  const { showUpdatePassForm } = useSelector((state) => state.password);

  return (
    <>
      <HeaderEntry />
      <div className="entry-page freedom-grad">
        <Jumbotron className="bg-light jumbotron-1">
          {showUpdatePassForm ? <UpdatePasswordForm /> : <ResetPassword />}
          <div className="text-right">
            <a href="/" className="">
              Login Now
            </a>
          </div>
        </Jumbotron>
      </div>
    </>
  );
};
