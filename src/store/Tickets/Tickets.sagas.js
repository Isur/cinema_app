import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  BUY_TICKET,
  CREATE_TICKET,
  DELETE_TICKET,
  FETCH_TICKETS,
} from "./Tickets.types";
import {
  buyTicketFail,
  buyTicketSuccess,
  createTicketFail,
  createTicketSuccess,
  deleteTicketFail,
  deleteTicketSuccess,
} from "./Tickets.actions";
import {
  fetchTicketsFail,
  fetchTicketsSuccess,
} from "../Tickets/Tickets.actions";
import { resetTimer, startTimer } from "../User/User.actions";

export function* watchTicketsSaga() {
  yield takeEvery(FETCH_TICKETS, getTickets);
  yield takeEvery(CREATE_TICKET, addTicket);
  yield takeEvery(BUY_TICKET, buyTicket);
  yield takeEvery(DELETE_TICKET, deleteTicket);
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
    yield put(startTimer());
  } catch (e) {
    yield put(createTicketFail(e));
  }
}

function* buyTicket(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: `/Tickets/${action.id}`,
        data: {
          User: action.user,
          Showing: action.showing,
          FieldX: action.x,
          FieldY: action.y,
          Status: 1,
        },
        method: "PATCH",
      })
    );
    yield put(buyTicketSuccess(data.ticket));
    yield put(resetTimer());
  } catch (e) {
    yield put(buyTicketFail(e));
  }
}

function* deleteTicket(action) {
  try {
    const { data } = yield call(() =>
      axios.request({
        url: `/Tickets/${action.id}`,
        method: "DELETE",
      })
    );
    yield put(deleteTicketSuccess(data.id));
  } catch (e) {
    yield put(deleteTicketFail(e));
  }
}
