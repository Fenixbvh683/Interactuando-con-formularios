const $ = id => document.getElementById(id)

/*const show = (info, error, element) => {
    $(info).hidden = false
    $(error).hidden = true
    element.borderColor = 'inherit'
}

const validateElement = (info, error, element) => {
    
    $(info).hidden = true
    if(!element.target.value.trim()){
        $(error).hidden = false
    }
    
}*/

/*const show = (info, pError, element) => {
    $(info).hidden = false
    $(pError).innerHTML = null
    element.borderColor = 'inherit'
}*/

const show = (info, pError, element) => {
    $(info).hidden = false
    $(pError).innerHTML = null
    element.classList.remove('is-invalid')
}

const validateElement = (info, pError, msgError, element) => {
    
    /*$(info).hidden = true
    if(!element.target.value.trim()){
        $(pError).innerHTML = msgError
    }*/

    $(info).hidden = true

        $(pError).innerHTML = msgError
        element.classList.add('is-invalid')
    
}

window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    



let formAdd = document.querySelector('.form')

let elementsForm = formAdd.elements

//$('title').focus()

$('title').addEventListener('focus',({target}) => {
    
    show('msg-title', 'error-title', target)
    
})

$('title').addEventListener('blur', function ({target}) {
    //validateElement('msg-title', 'error-title', e)
    //validateElement('msg-title', 'error-title', 'El titulo abuelo', e)
    switch (true) {
        case !this.value.trim():
            validateElement('msg-title', 'error-title', 'El titulo abuelo', target)
            break;
    
        default:
            break;
    }
    
})

$('rating').addEventListener('focus',({target}) => {
    show('msg-rating', 'error-rating', target)
})

$('rating').addEventListener('blur', function ({target}) {
    //validateElement('msg-rating', 'error-rating', e)
       // validateElement('msg-rating', 'error-rating','NO vale nada???', e)

    switch (true) {
        
        case !this.value.trim():
            validateElement('msg-rating', 'error-rating','NO vale nada???', target)
            break;

        case +this.value < 1 :
            validateElement('msg-rating', 'error-rating','Debe ser Mayor a Cero', target)
            break;

        case +this.value > 10 :
            validateElement('msg-rating', 'error-rating','Debe ser Menor a 10', target)
            break;

        default:
            break;
    }

    
})

formAdd.addEventListener('submit', function (event) {
    event.preventDefault()

    const msgErrors = [];

    for (let i = 0; i < elementsForm.length - 1; i++) {
        if (elementsForm[i].value.trim() === ""){
            msgErrors.push(`El campo ${elementsForm[i].name} no puede estar vacio`)

            elementsForm[i].classList.add('is-invalid')
            elementsForm[i].classList.remove('is-valid')
        }else{
            elementsForm[i].classList.remove('is-invalid')
            elementsForm[i].classList.add('is-valid')
        }
    }

    /*if(msgErrors.length){
        msgErrors.forEach(msg => {
            $('box-Errors').innerHTML+=`<li>${msg}</li>`
        })
    }else {
        this.submit()
    }*/

    if(msgErrors.length){
        alert('Los campos señalados son obligatorios')
    }else{
        this.submit()
    }

})

}