function validateForm() {
    
                   //Whitout the Array.from method what's returned is an object 
    const inputs = Array.from(document.getElementsByTagName('input'));
    const formContainer = document.getElementsByClassName("form__container");
    const imgs = document.getElementsByClassName("form__img");
    const errorMessage = document.getElementsByClassName("error-message");
    const inputsValues = []; /*I have no ideia why, but this needs to be here 
                            in order to work the validation*/

    /*Iterate through the inputs to check if there is one not filled and adds/removes
    the class .error which applies different font-color, border and image*/
    for (let index = 0; index <= 3; index++) {
        if (inputs[index].value === '' || inputs[index].value === null){
            inputsValues.push(inputs[index].value);
            formContainer[index].classList.add("error");
            imgs[index].classList.add("error");
            errorMessage[index].classList.add("error");
            
        } else if (inputs[index].value !== '' || inputs[index].value !== null) {
            formContainer[index].classList.remove("error");
            imgs[index].classList.remove("error");
            errorMessage[index].classList.remove("error");
        }
    }
    if (inputsValues.includes('')) {
        return false;
    }
    return true;
}


