import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                description: assignment.description,
                dueDate: assignment.dueDate,
                course: assignment.course,
                completed: false,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            );
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            );
        },
        markAssignmentComplete: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? { ...a, completed: true } : a
            );
        },
    },
});

export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    markAssignmentComplete,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;

// reducer.tsx
