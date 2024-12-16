import axios from "axios";
import {apiUrl} from '../index';
import * as ActionType from '../types/authTypes';
import {Toast} from "toastify-react-native";

export const loginAction = (email, password) => (dispatch) => {
    dispatch({ type: ActionType.LOADING_START });
    console.log("Payload:", { emailorphone: email, password }); // Debugging payload
    axios.post(
        `https://gsn-api.notebrains.com/api/signin`,
        { emailorphone: email, password }, // Correct key as per Postman
        { headers: { 'Content-Type': 'application/json' } } // Ensure headers match backend requirements
    )
    .then(res => {
        console.log(res.status, "res.status in login");
        if (res.status === 401) {
            return Toast.error("Invalid email or password");
        }
        const user = res.data.data;
        dispatch({
            type: ActionType.GET_USER,
            payload: user,
        });
        dispatch({ type: ActionType.LOADING_END });
        Toast.success("Login successfully!");
        return true;
    })
    .catch(err => {
        dispatch({ type: ActionType.LOADING_END });
        console.error("Error details:", err.response ? err.response.data : err.message);
        if (err.response && err.response.status === 400) {
            return Toast.error(`Login failed: ${err.response.data.message || "Bad Request"}`);
        }
        Toast.error("Unexpected error occurred!");
        return false;
    });
};

export const registerAction = (
    first_name,
    last_name,
    email,
    phone,
    password,
    confirm_password,
    gender,
    dob,
    country_code,
    refer_by_code
) => (dispatch) => {
    dispatch({ type: ActionType.LOADING_START });
    console.log("Payload:", { emailorphone: email, password }); // Debugging payload
    axios.post(
        `https://gsn-api.notebrains.com/api/signup`,
        {   first_name,
            last_name,
            email,
            phone,
            password,
            confirm_password,
            gender,
            dob,
            country_code,
            refer_by_code}, // Correct key as per Postman
        { headers: { 'Content-Type': 'application/json' } } // Ensure headers match backend requirements
    )
    .then(res => {
        console.log(res.status, "res.status in signup");
        if(res.status == 201 && res.data["error"] == 0){        dispatch({ type: ActionType.LOADING_END });
        Toast.success("Register successfully!");
        return true;
    }else{
        Toast.error(res.data["message"]);
        return false;
    }

    })
    .catch(err => {
        dispatch({ type: ActionType.LOADING_END });
        console.error("Error details:", err.response ? err.response.data : err.message);
        if (err.response && err.response.status === 400) {
            return Toast.error(`Login failed: ${err.response.data.message || "Bad Request"}`);
        }
        Toast.error("Unexpected error occurred!");
        return false;
    });
};


export const registerUser = () => (dispatch) => {
    dispatch({
        type: ActionType.LOADING_START
    });
    try {
        dispatch({
            type: ActionType.LOADING_END
        });
    } catch (error) {
        console.log(`Error in registerUser(): ${error}`);
        
        dispatch({
            type: ActionType.LOADING_END
        });
    }
}

export const getUser = () => (dispatch) => {
    dispatch({
        type: ActionType.LOADING_START
    });
    try {
        dispatch({
            type: ActionType.LOADING_END
        });
    } catch (error) {
        console.log(`Error in getUser(): ${error}`);
        
        dispatch({
            type: ActionType.LOADING_END
        });
    }
}