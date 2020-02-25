(function() {
  const dom = {
    input: document.querySelector('.inp-task'),
    button: document.querySelector('.btn-add-task'),
    tasks: document.querySelector('.tasks')
  };

  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  function addTask() {
    tasks.unshift(dom.input.value);
    dom.input.value = '';
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log(tasks)
    showTasks();
  }

  function showTasks() {
    let output = '';
    for (item of tasks) {
      output += `
        <li>${item}</li>
      `
    };
    dom.tasks.innerHTML = output;
  }


  document.addEventListener('DOMContentLoaded', showTasks);

  dom.button.addEventListener('click', addTask);

  dom.input.addEventListener("keydown", e => { 
    const kc = e.which || e.keyCode;
    const enterKeyCode = 13;
    if (kc === enterKeyCode) {
      addTask();
    }
  })

})()
