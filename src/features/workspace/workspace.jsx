import React from 'react';
import LeftView from './leftView/leftView';
import TaskList from './taskList/taskList';
import RightView from './rightView/rightView';

function Workspace() {
    return (
        <div>
            <LeftView />
            <TaskList />
            <RightView />
        </div>
    );
}

export default Workspace;