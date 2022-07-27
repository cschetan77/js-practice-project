const textComponent = () => {
    let element = document.createElement('div');
    element.innerText = "Hey there how are you!"
    return element;
}

document.appendChild(textComponent());