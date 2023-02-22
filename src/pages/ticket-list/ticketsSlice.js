import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  replyTicketError: "",
  searchTicketList: [],
  // userTicketList: [],
  selectedTicket: {},
  replyMsg: "",
};

const ticketListSlice = createSlice({
  name: "ticketList",
  initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      state.tickets = action.payload;
      state.searchTicketList = action.payload;
      state.selectedTicket = action.payload;
      state.ticket = action.payload;
      // state.userTicketList = action.payload;
      state.isLoading = false;
    },
    fetchTicketFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    searchTickets: (state, { payload }) => {
      state.searchTicketList = state.tickets.filter((row) => {
        if (!payload) return row;

        return row._id.toLowerCase().includes(payload);
      });
    },
    searchTicketsM: (state, { payload }) => {
      state.searchTicketList = state.tickets.filter((row) => {
        if (!payload) return row;

        return row.dateOrdered.toLowerCase().includes(payload);
      });
    },
    searchTicketsC: (state, { payload }) => {
      // state.searchTicketList = state.tickets.filter((row) => {
      //   if (!payload) return row;
      //   return row.closerOne.toLowerCase().includes(payload.toLowerCase());
      // });
      // state.userTicketSearch =
      state.searchTicketList = state.tickets.filter((row) => {
        if (!payload) return row;

        return row.closerOne.toLowerCase().includes(payload);
      });
    },
    searchTicketsCMo: (state, { payload }) => {
      // state.userTicketSearch = state.searchTicketList = state.tickets.filter(
      //   (row) => {
      //     if (!payload) return row;

      //     return row.closerOne.toLowerCase().includes(payload);
      //   }
      // );
      state.searchTicketList = state.searchTicketList.filter((row) => {
        if (!payload) return row;

        return row.fundDate.toLowerCase().includes(payload);
      });
    },

    fetchSingleTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleTicketSuccess: (state, { payload }) => {
      state.selectedTicket = payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleTicketFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    replyTicketLoading: (state) => {
      state.isLoading = true;
    },
    replyTicketSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.error = "";
      state.replyMsg = payload;
    },
    replyTicketFail: (state, { payload }) => {
      state.isLoading = false;
      state.replyTicketError = payload;
    },
    closeTicketLoading: (state) => {
      state.isLoading = true;
    },
    closeTicketSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.error = "";
      state.replyMsg = payload;
    },
    closeTicketFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    resetResponseMsg: (state) => {
      state.isLoading = false;
      state.replyTicketError = "";
      state.replyMsg = "";
    },
  },
});

const { reducer, actions } = ticketListSlice;

export const {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  replyTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
  closeTicketFail,
  searchTickets,
  searchTicketsM,
  searchTicketsC,
  searchTicketsCMo,
  resetResponseMsg,
} = actions;

export default reducer;
