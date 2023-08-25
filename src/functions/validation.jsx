
const Validation = (userData, setErrors, errors, property) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const numberPattern = /\d/;
    if (property === "mail") {
        if (!userData.mail) {
            setErrors({ ...errors, mail: "Email vacío" });
        } else if ((userData.mail.length > 35)) {
            setErrors({ ...errors, mail: "Email demasiado largo" });
        } else if (!emailPattern.test(userData.mail)) {
            setErrors({ ...errors, mail: "Email inválido" });
        } else {
            setErrors({ ...errors, mail: "" });
        }
    } else {
        if (!userData.password) {
            setErrors({ ...errors, password: "password vacío" });
        } else if (!numberPattern.test(userData.password)) {
            setErrors({ ...errors, password: "El password debe tener al menos un número" });
        } else if ((userData.password.length > 10 || userData.password.length < 6)) {
            setErrors({ ...errors, password: "El password debe tener entre 6 y 10 caracteres" });
        } else {
            setErrors({ ...errors, password: "" });
        }
    }
};

export default Validation
