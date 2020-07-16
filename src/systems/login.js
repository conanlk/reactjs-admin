export const validatelogin =  (user) => {
    if(user.username === '' || user.password === ''){
        return 'Username or password it not empty!';
    }else if(user.username !== 'admin' || user.password !== 'admin'){
        return 'Invalid username or password!';
    }
    return '';
}