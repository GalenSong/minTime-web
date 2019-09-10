import React from "react";
import Task from "./task";
import Tag from "./tag";
import Csl from "./csl";
import {Tabs} from "element-react";

class ProTabs extends React.Component {
    render() {
        return (
            <Tabs value="first">
                <Tabs.Pane label="清单" name="first">
                    <Task />
                </Tabs.Pane>
                <Tabs.Pane label="标签" name="second">
                    <Tag />
                </Tabs.Pane>
                <Tabs.Pane label="自定义" name="third">
                    <Csl />
                </Tabs.Pane>
            </Tabs>
        )
    }
}

export default ProTabs;