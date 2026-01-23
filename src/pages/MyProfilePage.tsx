import {useEffect, useState} from "react";
import {refresh} from "../services/auth.service.ts";
import type {IUser} from "../models/user-model/IUser.ts";
import {loadMyProfile} from "../services/api.myprofile.service.ts";
import UserComponent from "../components/user-component/UserComponent.tsx";
import {Outlet} from "react-router";
import ButtonsComponent from "../components/buttons-component/ButtonsComponent.tsx";

const MyProfilePage = () => {
    const [myProfile, setMyProfile] = useState<IUser>();
    useEffect(() => {
        loadMyProfile()
            .then(data => {
                setMyProfile(data);
            })
            .catch(() => {
                refresh()
                    .then(() => loadMyProfile())
                    .then(data => {
                        setMyProfile(data)
                    })
            });
    }, [])
    return (
        <>
            {myProfile &&
                <>
                    <UserComponent user={myProfile} ElementType={'div'}/>
                    <ButtonsComponent id={myProfile.id}/>
                </>
            }
            <Outlet context={{userId: myProfile?.id}}/>
        </>
    )
}
export default MyProfilePage;