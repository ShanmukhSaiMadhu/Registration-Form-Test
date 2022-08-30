const validate = () => {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let phoneNumberInput = document.getElementById('phone-number').value
    let batchNoInput = document.getElementById('batch-number').value
    let moduleInput = document.getElementById('curr-module').value
    let tnCInput = document.getElementById('tnC').checked

    

    let validAnswers = 0

    if(firstNameInput.length >= 3 && !parseInt(firstNameInput)) {
        ++validAnswers
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    }else {
        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('first-name-invalid').style.display = 'block'
    }

    if(lastNameInput.length >= 3 && !parseInt(lastNameInput)) {
        ++validAnswers
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }else {
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('last-name-invalid').style.display = 'block'
    }

    if(emailInput && emailInput.includes('@') && emailInput.includes('.') && emailInput.lastIndexOf('.') <= emailInput.length - 3 && emailInput.indexOf('@') != 0) {
        ++validAnswers
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }else {
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
    }

    if(phoneNumberInput.length === 10) {
        ++validAnswers
        document.getElementById('phone-number-valid').style.display = 'block'
        document.getElementById('phone-number-invalid').style.display = 'none'
    }else {
        document.getElementById('phone-number-valid').style.display = 'none'
        document.getElementById('phone-number-invalid').style.display = 'block'
    }

    if(batchNoInput != 'Select Batch') {
        ++validAnswers
        document.getElementById('batch-valid').style.display = 'block'
        document.getElementById('batch-invalid').style.display = 'none'
    }else {
        document.getElementById('batch-valid').style.display = 'none'
        document.getElementById('batch-invalid').style.display = 'block'
    }

    if(moduleInput != 'Current Module') {
        ++validAnswers
        document.getElementById('module-valid').style.display = 'block'
        document.getElementById('module-invalid').style.display = 'none'
    }else {
        document.getElementById('module-valid').style.display = 'none'
        document.getElementById('module-invalid').style.display = 'block'
    }

    if(tnCInput) {
        ++validAnswers
        document.getElementById('tnC-invalid').style.display = 'none'
    } else {
        document.getElementById('tnC-invalid').style.display = 'block'
    }

    if(validAnswers === 7) {
        alert('Your details have been saved successfully')
        location.reload()
        
    }

    
}

const resetFeilds = () => {
    document.getElementById('first-name').value = ''
    document.getElementById('last-name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('phone-number').value = ''
    document.getElementById('batch-number').value = ''
    document.getElementById('curr-module').value = ''
    document.getElementById('tnC').checked = false
    }