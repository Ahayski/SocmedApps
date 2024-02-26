import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUserRegist } from "../../../interface/user";
import { API } from "../../../libs/api";
import useToast from "../../../hooks/useToast";

export function useRegister() {
    const navigate = useNavigate()
    
    const[form, setForm] = useState<IUserRegist>({
        full_name: "",
        user_name: "",
        email: "",
        password: ""
    })

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })

    }
    const toast = useToast();

    async function handleRegister(){
        try {
            const response = await API.post("/auth/register", form)
            if (response) toast ("Account Created", "Register successfully", "success");
            navigate("/login")
        } catch (error) {
            console.log(error)
        }

    }
    return {handleChange,handleRegister}
}