import {
  newLi
} from './addTask.js';
import {
  changeFiltre,
} from './filtre.js';
axios.get('/data.json')
  .then(function (response) {
    // handle success
    var tasks = response.data.tasks;
    tasks.forEach((task) => {
      newLi(task.text, task.state);
    });
    changeFiltre("valided-task");
    changeFiltre("deleted-task");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });