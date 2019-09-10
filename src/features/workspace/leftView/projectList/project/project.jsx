import React from "react";
import Tabs from './tabs/tabs';

class Project extends React.Component {
    render() {
        return (
            <div>
                <Tabs />
                <section>
                    <ul>
                        <li>
                            <i></i>
                            <span>已完成</span>
                        </li>
                        <li>
                            <i></i>
                            <span>垃圾桶</span>
                        </li>
                        <li>
                            <i></i>
                            <span>摘要</span>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Project;