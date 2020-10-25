import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import { CREATE_TICKET, FETCH_TICKETS } from "./Tickets.types";
import { createTicketFail, createTicketSuccess } from "./Tickets.actions";
import {
  fetchTicketsFail,
  fetchTicketsSuccess,
} from "../Tickets/Tickets.actions";

export function* watchTicketsSaga() {
  yield takeEvery(FETCH_TICKETS, getTickets);
  yield takeEvery(CREATE_TICKET, addTicket);
}

function* getTickets() {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: "/Tickets",
        method: "GET",
      })
    );
    yield put(fetchTicketsSuccess(data));
  } catch (e) {
    yield put(fetchTicketsFail(e));
  }
}

function* addTicket(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: "/Tickets",
        data: {
          User: action.user,
          Showing: action.showing,
          FieldX: action.x,
          FieldY: action.y,
        },
        method: "POST",
      })
    );
    yield put(createTicketSuccess(data.ticket));
  } catch (e) {
    yield put(createTicketFail(e));
  }
}
