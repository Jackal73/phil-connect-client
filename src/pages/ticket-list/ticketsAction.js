import {
  closeTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
  fetchSingleTicketFail,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
  replyTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  searchTickets,
  searchTicketsC,
  searchTicketsCMo,
  searchTicketsM,
  searchTicketsF,
} from "./ticketsSlice";

import {
  getAllTickets1,
  getSingleTicket1,
  updateReplyTicket,
  updateTicketStatusClosed,
} from "../../api/ticketApi";

export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets1();
    result.data.result.length &&
      dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};
export const filterSearchTicketM = (str) => (dispatch) => {
  dispatch(searchTicketsM(str));
};
export const filterSearchTicketC = (str) => (dispatch) => {
  dispatch(searchTicketsC(str));
};
export const filterSearchTicketF = (str) => (dispatch) => {
  dispatch(searchTicketsF(str));
};
export const filterSearchTicketCMo = (str) => (dispatch) => {
  dispatch(searchTicketsCMo(str));
};

//Actions for single ticket only
export const fetchSingleTicket = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketLoading());
  try {
    const result = await getSingleTicket1(_id);
    dispatch(
      fetchSingleTicketSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleTicketFail(error.message));
  }
};

// Actions for ANY single ticket by id
export const fetchSingleTicket1 = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketLoading());
  try {
    const result = await getSingleTicket1(_id);
    dispatch(
      fetchSingleTicketSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleTicketFail(error.message));
  }
};

//Actions for replying on single ticket
export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
  dispatch(replyTicketLoading());
  try {
    const result = await updateReplyTicket(_id, msgObj);
    console.log(result);
    if (result.status === "error") {
      return dispatch(replyTicketFail(result.message));
    }

    dispatch(fetchSingleTicket(_id));

    dispatch(replyTicketSuccess(result.message));
  } catch (error) {
    console.log(error.message);
    dispatch(replyTicketFail(error.message));
  }
};
//Actions for closing ticket
export const closeTicket = (_id) => async (dispatch) => {
  dispatch(closeTicketLoading());
  try {
    const result = await updateTicketStatusClosed(_id);
    if (result.status === "error") {
      return dispatch(closeTicketFail(result.message));
    }

    dispatch(fetchSingleTicket(_id));

    dispatch(closeTicketSuccess("Connected!"));
  } catch (error) {
    console.log(error.message);
    dispatch(closeTicketFail(error.message));
  }
};
