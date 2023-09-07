
const validator = (data) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const numberPattern = /\d/;
    let errors = {}

    if (!data.mail) {
        errors.e1 = 'Ingresa un email.'
    }
    if (!emailPattern.test(data.mail)) {
        errors.e2 = 'Ingresa un email válido.'
    }
    if (data.mail.length > 35) {
        errors.e3 = 'Debe tener menos de 36 caracteres.'
    }
    if (!numberPattern.test(data.password)) {
        errors.p1 = 'Al menos un número'
    }
    if (data.password.length < 6 || data.password.length > 10) {
        errors.p2 = 'Debe tener mas de 6 y menos de 10 caracteres.'
    }

    return errors;
}

export default validator;