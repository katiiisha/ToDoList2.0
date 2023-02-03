//находим переменные в html
const input = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const result = document.querySelector('.ul');

btn.addEventListener('click', (e) => { 
    if (input.value === '') return
    CreateOrDeleteElement(input.value)
    input.value = ''; 
})
function CreateOrDeleteElement(value) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.className = 'li';
    li.textContent = value;
    li.append(btn);
    result.append(li);
    btn.addEventListener('click', (e) => {
        result.removeChild(li);
    })
}