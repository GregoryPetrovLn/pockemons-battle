import {GET_LIST_POCKEMONS} from "./actionTypes";
import axios from "axios";

export const getListPockemons = (limit = 10) => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_LIST_POCKEMONS.INIT})
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
            dispatch({type: GET_LIST_POCKEMONS.SUCCESS, payload: data.results})
        } catch (e) {
            dispatch({type: GET_LIST_POCKEMONS.ERROR, payload: e.response.data.error})
        }
    }
}