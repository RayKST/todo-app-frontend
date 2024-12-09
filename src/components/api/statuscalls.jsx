import instance from "./api";

class StatusCalls 
{
    async GetStatus(cookie, setError, statusID) {
        try {
            if (!statusID)
            {
                const response = await instance.get('/api/todo_status');
                cookie.set('statusData', response.data);
            } else {
                const response = await instance.get(`/api/todo_status?todoStatusID=${statusID}`);
                cookie.set('statusData', response.data);
            }
        } catch (err) {
            setError(err);
        }
    };
}


export default StatusCalls;