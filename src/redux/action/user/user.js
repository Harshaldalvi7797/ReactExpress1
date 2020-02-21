import {USER_REGISTER} from "./user.type";
import {userRegister} from "../../api/user/register";



export const Userregister = (item) =>
{
    return async dispatch =>
    {
        let sendData= Userregister(item);
        console.log(sendData);
        //   dispatch({ type: USER_REGISTER ,payload: sendData.Data});

    }
}