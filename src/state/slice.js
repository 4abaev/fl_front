import { createSlice } from "@reduxjs/toolkit";
import { createPeople, deletePeople, getPeoples, patchPeople } from "./actions";

const initialState = {
    peoples: [],
    loading: false,
    error: null,
};

export const peoplesSlice = createSlice({
    name: "people",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPeoples.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(getPeoples.fulfilled, (state, action) => {
                state.error = null;
                state.loading = false;
                state.peoples = action.payload;
            })
            .addCase(getPeoples.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(createPeople.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(createPeople.fulfilled, (state, action) => {
                state.error = null;
                state.loading = false;
                state.peoples.push(action.payload);
            })
            .addCase(createPeople.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(patchPeople.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(patchPeople.fulfilled, (state, action) => {
                state.error = null;
                state.loading = false;
                const updatedPerson = action.payload;
                const index = state.peoples.findIndex(
                    (person) => person.id === updatedPerson.id
                );
                if (index !== -1) {
                    state.peoples[index] = updatedPerson;
                }
            })
            .addCase(patchPeople.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(deletePeople.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(deletePeople.fulfilled, (state, action) => {
                state.error = null;
                state.loading = false;
                const deletedPersonId = action.payload.id;
                state.peoples = state.peoples.filter(
                    (p) => p.id !== deletedPersonId
                );
            })
            .addCase(deletePeople.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default peoplesSlice.reducer;
