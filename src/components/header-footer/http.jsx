// le lien du chemein vers mon api
export const apiUrl = 'http://localhost:8000/api/';
export const fileUrl = 'http://localhost:8000/';

// token export
export const token = () => {
    const userInfo = localStorage.getItem('userInfo');
    const data = JSON.parse(userInfo);
    return data.token;
}
