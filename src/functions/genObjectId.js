import ObjectID from "bson-objectid";
// import randomNumber from "../helpers/randomNumber";

export default function genObjId() {
    return ObjectID(Date.now()).toHexString();
}
