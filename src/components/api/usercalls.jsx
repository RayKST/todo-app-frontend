import instance from "./api";

class UserCalls 
{
    async GetLogin(dataJson, setError) {
        try {
            const response = await instance.post('/api/login', dataJson, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } catch (err) {
            setError(err);
        }
    };

    async CreateUser(dataJson, setError) {
        try {
            const response = await instance.post('/api/user', dataJson, {
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


export default UserCalls;