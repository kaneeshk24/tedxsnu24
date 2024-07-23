import { useContext } from "react";
import { ConfContext } from "../context/ConfContext";

export default function useConf() {
    return useContext(ConfContext);
}