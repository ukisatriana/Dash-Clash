import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import FirestoreService from '../../services/FirestoreService';

// Async thunks for Firestore operations
export const createJenisClash = createAsyncThunk(
    'jenisClash/createJenisClash',
    async (newJenisClash, { rejectWithValue }) => {
        try {
            const docRef = await FirestoreService.collection('jenisClash').add(newJenisClash);
            return { id: docRef.id, ...newJenisClash };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateJenisClash = createAsyncThunk(
    'jenisClash/updateJenisClash',
    async ({ id, updatedJenisClash }, { rejectWithValue }) => {
        try {
            await FirestoreService.collection('jenisClash').doc(id).update(updatedJenisClash);
            return { id, ...updatedJenisClash };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteJenisClash = createAsyncThunk(
    'jenisClash/deleteJenisClash',
    async (id, { rejectWithValue }) => {
        try {
            await FirestoreService.collection('jenisClash').doc(id).delete();
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Initial state
const initialState = {
    jenisClashList: [],
    loading: false,
    error: null,
};

// Slice
const jenisClashSlice = createSlice({
    name: 'jenisClash',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createJenisClash.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createJenisClash.fulfilled, (state, action) => {
                state.loading = false;
                state.jenisClashList.push(action.payload);
            })
            .addCase(createJenisClash.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateJenisClash.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateJenisClash.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.jenisClashList.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.jenisClashList[index] = action.payload;
                }
            })
            .addCase(updateJenisClash.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteJenisClash.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteJenisClash.fulfilled, (state, action) => {
                state.loading = false;
                state.jenisClashList = state.jenisClashList.filter(item => item.id !== action.payload);
            })
            .addCase(deleteJenisClash.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default jenisClashSlice.reducer;