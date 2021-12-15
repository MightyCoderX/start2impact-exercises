import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';


function App()
{
    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState([]);

    useEffect(() =>
    {
        const getTasks = async () =>
        {
            const tasksFromServer = await fetchTasks();

            setTasks(tasksFromServer);
        };

        getTasks();
    }, []);

    async function fetchTasks()
    {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();

        return data;
    }

    async function fetchTask(id)
    {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();

        return data;
    }

    async function addTask(task)
    {
        const res = await fetch('http://localhost:5000/tasks',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });

        const newTask = await res.json();

        setTasks([...tasks, newTask]);

        // const id = Math.floor(Math.random() * 10000) + 1;
        // const newTask = { id, ...task };

        // setTasks([...tasks, newTask]);
    }

    async function deleteTask(id)
    {
        await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});
        setTasks(tasks.filter(task => task.id !== id));
    }

    async function toggleReminder(id)
    {
        const taskToToggle = await fetchTask(id);
        const updTask = {
            ...taskToToggle, 
            reminder: !taskToToggle.reminder
        }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updTask)
        });

        const data = await res.json();


        setTasks(tasks.map(task => 
            task.id === id 
                ? { ...task, reminder: !data.reminder }
                : task
            ));
    }

    return (
        <Router>
            <div className="container">
                <Header 
                    onAdd={ () => setShowAddTask(!showAddTask) } 
                    showAdd={showAddTask} 
                />
                
                <Route 
                    path="/" 
                    exact 
                    render={ props => 
                    (
                        <>
                            { showAddTask && <AddTask onAdd={addTask} /> }
                            {
                                tasks.length > 0 
                                    ? <Tasks 
                                        tasks={tasks} 
                                        onDelete={deleteTask} 
                                        onToggle={toggleReminder} 
                                      /> 
                                    : 'No Tasks To Show'
                            }
                        </>
                    )}
                />
                <Route path="/about" component={About} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
