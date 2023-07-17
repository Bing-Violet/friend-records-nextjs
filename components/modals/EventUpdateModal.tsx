import CustomModal from "./CustomModal"
import {RiSettings4Line} from "react-icons/ri"
import { IconButton } from "@chakra-ui/react";
import { EventProps } from "@/redux/features/eventApiSlice";
import { EventUpdateForm } from "../forms/events"

interface Props {
    id:string;
    name:string;
    money:number;
    icon:string;
    friendId:string
}

export default function EventUpdateModal({ ...event }:EventProps) {
    return (
        <>
         <CustomModal isCentered={true} title={"Event-Info"} open={ <IconButton size={'xs'} aria-label="evnet-info" color={'gray'} icon={<RiSettings4Line/>}/>} content={<EventUpdateForm {...event}/>}/>
        </>
    )
}