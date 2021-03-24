import axios from 'axios';
import { showAlert } from './alert';


export const changeTaskStatus = (taskId, status,projectName) => {
        const url = `http://127.0.0.1:9696/api/tasks/${taskId}`;
        axios({
            method: 'PUT',
            url,
            data :{
                status,
                projectName
            }
        })
        .then(res => {
            if (res.data.status === "success") {
                showAlert('success', 'Update successfully');
                window.setTimeout(() => {
                    location.assign(`/project/${projectName}`)
                }, 1500);
            }
        })
        .catch(err => {
            showAlert('error', err.response.data.message);
        })
}
