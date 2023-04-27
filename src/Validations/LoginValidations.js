import * as yep from "yup";

const msg = {
    invalidEmail: "S'il vous plaît, mettez une adresse email valide",
    requiredEmail: "Adresse e-mail est nécessaire",
    requiredPassword: "Mot de passe requis",
    minLengthPassword: "Le mot de passe doit comporter au moins 6 caractères",
    maxLengthPassword: "Le mot de passe doit comporter moins de 26 caractères",
};

export const loginSchema = yep.object().shape({
    email: yep.string().email(msg.invalidEmail).required(msg.requiredEmail),
    password: yep
        .string()
        .min(6, msg.minLengthPassword)
        .max(26, msg.maxLengthPassword)
        .required(msg.requiredPassword),
});
