// action creator to dashboard

import axios from 'axios';

const BASE_URL = "http://localhost:3003/api";

// action creator
export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`) // promise
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}