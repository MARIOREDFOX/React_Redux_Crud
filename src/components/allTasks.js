import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Table } from 'react-bootstrap';

class AllTasks extends PureComponent {

    componentWillMount() {
        this.props.fetchTasks();
    }

    renderTasks() {
        return this.props.allTasks.map(task => {
            return <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Assigned User</th>
                        <th>Task Date</th>
                        <th>Task Time</th>
                        <th>Is Completed</th>
                        <th>Time Zone</th>
                        <th>Task Message</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={task.task}>
                        <td>{task.assigned_user}</td>
                        <td>{task.task_date}</td>
                        <td>{task.task_time}</td>
                        <td>{task.is_completed}</td>
                        <td>{task.time_zone}</td>
                        <td>{task.task_msg}</td>
                    </tr>
                </tbody>
            </Table>;
        })
    }
    

    render() {
        if (!this.props.allTasks) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                {this.renderTasks()}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { allTasks: state.allTasks.homePageTasks }
}

export default connect(mapStateToProps, actions)(AllTasks);
