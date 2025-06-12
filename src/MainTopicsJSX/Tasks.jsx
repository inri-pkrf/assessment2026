import React, { useState, useEffect } from 'react';
import '../MainTopicsCss/Tasks.css';
import tasksData from '../Data/tasksData.jsx';

function Tasks() {

    const [selectedTask, setSelectedTask] = useState(null);

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };

    const handleBack = () => {
        setSelectedTask(null);
    };

    const renderTasks = (taskSection) => (
        <div className="task-section">
            <h2 className="section-title">{taskSection.title}</h2>
            <ul className="task-list">
                {taskSection.tasks.map((item, i) => (
                    <li key={i}>
                        {typeof item === 'string' ? (
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                {item}
                            </label>
                        ) : (
                            <li>
                                <span className="sub-title-only">{item.subTitle}</span>
                                <ul className="subtasks-no-bullet">
                                    {item.subTasks.map((subTask, j) => (
                                        <li key={j}>
                                            <label className="checkbox-label">
                                                <input type="checkbox" />
                                                {subTask}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );

    
   useEffect(() => {
    window.scrollTo(0, 0);
}, [selectedTask]);


    return (
        <div className="Tasks">
            <img
                src={process.env.PUBLIC_URL + '/assets/images/logos-assessment/assesment7.png'}
                className="icon-Tasks"
                alt="Tasks"
            />
            <h1 className="Tasks-title">סדר פעולות למכלולים</h1>

            {!selectedTask ? (
                <div className="part1-tasks">
                    <div className="subTitle1-tasks">
                        כאן ניתן לצפות בסדר פעולות לפי מכלול ושלב חירום
                    </div>
                    <div className="array-tasks">
                        {tasksData.map((task, index) => (
                            <div
                                key={index}
                                className="tasksDiv"
                                onClick={() => handleTaskClick(task)}
                            >
                                {task.id}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="part2-tasks">
                    <div className="selected-task-title">
                        <span className="selected-task-prefix">
                            {selectedTask.id === 'מנכ"ל' ? 'בחרת ב' : 'בחרת במכלול'}
                        </span>
                        <span className="selected-task-id">{selectedTask.id}</span>
                    </div>

                    {/* חלק ראשון */}
                    {renderTasks(selectedTask.tasks1)}

                    {/* חלק שני */}
                    {renderTasks(selectedTask.tasks2)}

                    <div className="btn-to-tasksPart1" onClick={handleBack}>
                        חזרה לבחירת מכלולים
                    </div>
                </div>
            )}
        </div>
    );
}

export default Tasks;
