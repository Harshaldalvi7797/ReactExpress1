import { combineReducers} from "redux";

import {RegisterUser} from "../reducer/user/user";

const reducer=  combineReducers({register: RegisterUser })

export  default reducer;