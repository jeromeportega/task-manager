require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5ca575eb0b9e3950fb8d9240').then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then(result => {
//     console.log(result);
// }).catch(e => {
//     console.log(e);
// });

const deleteTaskAndCount = async id => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });

    return count;
}

deleteTaskAndCount('5ca575eb0b9e3950fb8d9240').then(count => {
    console.log(count);
}).catch(e => {
    console.log(e);
});