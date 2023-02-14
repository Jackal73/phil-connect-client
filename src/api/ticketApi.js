import axios from "axios";

// const rootUrl = "";
const rootUrl = "http://localhost:3001/v1/";

const ticketUrl = rootUrl + "ticket/";
const ticketUrlAll = rootUrl + "ticket/1/";
const closeTicketUrl = rootUrl + "ticket/close-ticket/";

export const getAllTickets = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(ticketUrl, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
      console.log(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const getAllTickets1 = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(ticketUrlAll, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
      // console.log(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSingleTicket = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(ticketUrl + _id, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

//get ANY single ticket by id
export const getSingleTicket1 = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(ticketUrlAll + _id, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const updateReplyTicket = (_id, msgObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.put(ticketUrl + _id, msgObj, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result.data);
      console.log(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const updateTicketStatusClosed = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(
        closeTicketUrl + _id,
        {},
        {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        }
      );
      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const createNewTicket = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(ticketUrl, frmData, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const deleteTicket = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.delete(ticketUrl + _id, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);

      console.log(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};
