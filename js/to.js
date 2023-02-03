const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.ul');

//массив для хранения задач
const tasks = [];
const createTasks = (task) => {
    tasks.push(task);

}
//делаем объект при клике
btn.addEventListener('click', () => {
    const task = {};
    task.text = inp.value;
    task.id = new Date().getTime()
    task.done = false;
    createTasks(task);
    
    renderTaskList();
    inp.value = '';
})

const renderTaskList = () => {
    ul.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        const inp = document.createElement('input');
        const delbtn = document.createElement('button');
        li.className = 'li';
        inp.className = 'inp';
        delbtn.className = 'delbtn';
        delbtn.innerHTML = 'X';
        inp.value = task.text;
        
        li.append(inp, delbtn);
        ul.append(li);
        //удаление элемента
        delbtn.addEventListener('click', (y) => {
             ul.removeChild(li);
        })
    })
  
}