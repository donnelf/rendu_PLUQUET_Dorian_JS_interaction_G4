let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    // Empêche le comportement par défaut (envoi du formulaire)
    event.preventDefault();

    let errorContainer = document.querySelector('.message-error');
    let errorList = document.querySelector('.message-error ul');

    errorList.innerHTML = "";
    errorContainer.classList.remove('visible');

    let email = document.querySelector('#email');
    if (email.value === '') {
        errorContainer.classList.add('visible');
        email.classList.remove('success');
        let err = document.createElement('li');
        err.innerText = "Le champ email ne peut pas être vide";
        errorList.appendChild(err);
    } else {
        email.classList.add('success');
    }

    let Nom = document.querySelector("#Nom");
    if (Nom.value === '') {
        errorContainer.classList.add('visible');
        Nom.classList.remove('success');
        let err = document.createElement('li');
        err.innerText = "Le champ Nom ne peut pas être vide";
        errorList.appendChild(err);
    } else {
        Nom.classList.add('success');
    }

    let Prenom = document.querySelector("#Prenom");
    if (Prenom.value === '') {
        errorContainer.classList.add('visible');
        Prenom.classList.remove('success');
        let err = document.createElement('li');
        err.innerText = "Le champ Prénom ne peut pas être vide";
        errorList.appendChild(err);
    } else {
        Prenom.classList.add('success');
    }

    let passcheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );

    let password = document.querySelector("#password");
    if (password.value.length < 6 || !passcheck.test(password.value)) {
        errorContainer.classList.add('visible');
        password.classList.remove('success');
        let err = document.createElement('li');
        err.innerText = "Le mot de passe doit avoir au moins 6 caractères et contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial";
        errorList.appendChild(err);
    } else {
        password.classList.add('success');
    }

    let passwordConfirm = document.querySelector("#password2");
    if (passwordConfirm.value !== password.value || passwordConfirm.value === '') {
        errorContainer.classList.add('visible');
        passwordConfirm.classList.remove('success');
        let err = document.createElement('li');
        err.innerText = "Les deux mots de passe doivent être identiques";
        errorList.appendChild(err);
    } else {
        passwordConfirm.classList.add('success');
    }

    let successContainer = document.querySelector('.message-success');
    successContainer.classList.remove('visible');
    if (email.classList.contains('success') && pseudo.classList.contains('success') && password.classList.contains('success') && passwordConfirm.classList.contains('success')) {
        successContainer.classList.add('visible');
    }
});

