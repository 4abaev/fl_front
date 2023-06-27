import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = process.env.REACT_APP_API;

export const getPeoples = createAsyncThunk(
    "peoples/getAll",
    async function getPeoples(data, thunkAPI) {
        try {
            return (await axios.get(`${api}/people`)).data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const createPeople = createAsyncThunk(
    "people/create",
    async function createPeople(data, thunkAPI) {
        try {
            return (await axios.post(`${api}/people`, data)).data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const putPeople = createAsyncThunk(
    "people/put",
    async function putPeople(data, thunkAPI) {
        try {
            return (await axios.put(`${api}/people/${data.id}`, data)).data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deletePeople = createAsyncThunk(
    "people/delete",
    async function deletePeople(data, thunkAPI) {
        try {
            return (await axios.delete(`${api}/people/${data.id}`, data)).data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
