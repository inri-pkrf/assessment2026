import React, { useState, useEffect } from 'react';
import '../MainTopicsCss/Tasks.css';
import tasksData from '../Data/tasksData.jsx';

function Tasks() {

    const [selectedTask, setSelectedTask] = useState(null);
    const [activeSection, setActiveSection] = useState(null);

    // מיפוי שמות הכפתורים (תוכלי לשנות טקסטים כאן בלבד)
    const sectionLabels = {
        tasks1: 'סד"פ מעמ"ל',
        tasks2: 'סד"פ אירוע הרס',
        tasks3: 'סד"פ מס"ר',
        tasks4: 'סד"פ שגרת חירום'
    };

    // מחזיר רק את ה-sections שקיימים בפועל בדאטה
    const getAvailableSections = (task) => {
        if (!task) return [];

        return Object.keys(sectionLabels)
            .filter((key) => task[key] && task[key].tasks && task[key].tasks.length > 0);
    };

    const handleTaskClick = (task) => {
        setSelectedTask(task);

        // בחירת החלק הראשון שקיים בפועל (ולא תמיד tasks1)
        const available = getAvailableSections(task);
        setActiveSection(available[0] || null);
    };

    const handleBack = () => {
        setSelectedTask(null);
        setActiveSection(null);
    };

    const renderTasks = (taskSection) => {
        if (!taskSection || !taskSection.tasks) return null;

        return (
            <div className="task-section">
                <h2 className="section-title">{taskSection.title}</h2>

                <ul className="task-list">
                    {taskSection.tasks.map((item, i) => (
                        typeof item === 'string' ? (
                            <li key={i} className="task-item">
                                <label className="checkbox-label">
                                    <input type="checkbox" />
                                    <span className="task-text">{item}</span>
                                </label>
                            </li>
                        ) : (
                            <li key={i} className="task-item-with-sub">
                                {/* subTitle */}
                                {item.subTitle && (
                                    <div className="sub-title-only">
                                        {item.subTitle}
                                    </div>
                                )}

                                {/* תתי משימות */}
                                {item.subTasks && (
                                    <ul className="subtasks-no-bullet">
                                        {item.subTasks.map((subTask, j) => (
                                            <li key={j} className="subtask-item">
                                                <label className="checkbox-label">
                                                    <input type="checkbox" />
                                                    <span className="task-text">{subTask}</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )
                    ))}
                </ul>
            </div>
        );
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedTask]);

    const availableSections = selectedTask ? getAvailableSections(selectedTask) : [];

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
                            {selectedTask.id === 'מנכ"ל' ? 'בחרת ב' : 'בחרת במכלול '}
                        </span>
                        <span className="selected-task-id">{selectedTask.id}</span>
                    </div>

                    {/* כפתורים דינמיים לפי כמות ה-tasks ביחידה */}
                    <div className="sections-buttons">
                        {availableSections.map((sectionKey) => (
                            <button
                                key={sectionKey}
                                className={activeSection === sectionKey ? 'active-btn' : ''}
                                onClick={() => setActiveSection(sectionKey)}
                            >
                                {sectionLabels[sectionKey]}
                            </button>
                        ))}
                    </div>

                    {/* תוכן דינמי לפי הכפתור שנבחר */}
                    <div className="section-content">
                        {activeSection && renderTasks(selectedTask[activeSection])}
                    </div>

                    <div className="btn-to-tasksPart1" onClick={handleBack}>
                        חזרה לבחירת מכלולים
                    </div>
                </div>
            )}
        </div>
    );
}

export default Tasks;
