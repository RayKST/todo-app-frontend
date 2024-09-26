import instance from "./api";

class TaskCalls 
{
    async GetTask(setData, setError, taskID) {
        try {
            if (!taskID)
            {
                const response = await instance.get('/api/task');
                setData(response.data);
            } else {
                const response = await instance.get(`/api/task?taskID=${taskID}`);
                setData(response.data);
            }
        } catch (err) {
            setError(err);
        }
    };



    async UpdateTask(dataJson, setError) {
        try {
            await instance.put('/api/task', dataJson).then(response => {
                return response;
            })
        } catch (err) {
            setError(err);
        }
    };



    async CreateTask(dataJson, setError) {
        try {
            const response = await instance.post('/api/task', dataJson, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return response;
        } catch (err) {
            setError(err);
        }
    };
}



export default TaskCalls;