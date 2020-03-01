(function() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const done = JSON.parse(localStorage.getItem('done')) || [];

  const dom = {
    input: document.querySelector('.inp-task'),
    button: document.querySelector('.btn-add-task'),
    undone: document.querySelector('.undone-tasks'),
    done: document.querySelector('.done-tasks')
  };

  showTasks();

  function addTask() {
    tasks.unshift(dom.input.value);
    dom.input.value = '';
    localStorage.setItem('tasks', JSON.stringify(tasks))
    showTasks();
  }

  function addToDone(event) {
    if (event.target && event.target.matches('li.undone-task')) {
      tasks = tasks.filter(item => item !== event.target.innerText)
      done.push(event.target.innerText)
      localStorage.setItem('tasks', JSON.stringify(tasks))
      localStorage.setItem('done', JSON.stringify(done))
      showTasks();
    }
  }

  function showUndone() {
    let output = '';
    for (item of tasks) {
      output += `
        <li class='undone-task'>${item}</li>
      `
    };
    dom.undone.innerHTML = output;
  }

  function showDone() {
    let output = '';
    for (item of done) {
      output += `
        <li class='done-task'>${item}</li>
      `
    };
    dom.done.innerHTML = output;
  }

  function showTasks() {
    showUndone();
    showDone();
  }

  dom.button.addEventListener('click', addTask);
  dom.undone.addEventListener('click', addToDone);
  dom.input.addEventListener('keydown', event => { 
    const kc = event.which || event.keyCode;
    const enterKeyCode = 13;
    if (kc === enterKeyCode) {
      addTask();
    }
  })
})()

