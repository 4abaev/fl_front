import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = process.env.REACT_APP_API;

export const getPeoples = createAsyncThunk(
    "peoples/getAll",
    async function getPeoples(data, thunkAPI) {
        try {
            return (await axios.get(`${api}/users`)).data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const createPeople = createAsyncThunk(
    "people/create",
    async function createPeople(data, thunkAPI) {
        try {
            return (await axios.post(`${api}/users`, data)).data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const patchPeople = createAsyncThunk(
    "people/patch",
    async function patchPeople(data, thunkAPI) {
        try {
            return (await axios.patch(`${api}/users`, data)).data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deletePeople = createAsyncThunk(
    "people/delete",
    async function patchPeople(data, thunkAPI) {
        try {
            return (await axios.delete(`${api}/users/${data.id}`, data)).data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
