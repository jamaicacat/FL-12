let userLoginInput = prompt('Enter your login',''),
    userPasswordInput;
let userData = {
    login: 'user@gmail.com',
    password: 'UserPass'
};
let adminData = {
    login: 'admin@gmail.com',
    password: 'AdminPass'
};
const minimalLoginLength = 5,
      minimalNewLoginLength = 6;

//checks if user entered login at all
if (userLoginInput) {
    //checks if visitor entered login with valid length
    if (userLoginInput.length > minimalLoginLength) {
        //checks if visitor entered user's login
        if (userLoginInput === userData.login) {
            userPasswordInput = prompt('Enter your password','');
            if (userPasswordInput === userData.password) {
            //checks if visitor entered correct user's password
                if (confirm('Do you want to change your password?')) {
                //checks if user wants to change password
                    if (prompt('Write the old password','') === userData.password) {
                    //checks if user entered old password correct
                        userData.NewPassword = prompt('Enter new password','');
                        if (userData.NewPassword) {
                        //checks if user entered new password
                            if (userData.NewPassword.length > minimalNewLoginLength) {
                            //checks if user's new password correct
                                if (prompt('Enter new password again','') === userData.NewPassword) {
                                //checks if user entered his new password correct and then replaces old password with the new one 
                                    userData.password = userData.NewPassword;
                                    delete userData.NewPassword;
                                    alert('You have successfully changed your password.');
                                } else {
                                    alert('You wrote the wrong password.');
                                }

                            } else {
                                alert('It\'s too short password. Sorry.');
                            }

                        } else {
                            alert('Canceled');
                        }

                    } else {
                        alert('Wrong password');
                    }

                } else {
                    alert('Canceled');
                }

            } else {
                alert('Wrong password');
            } 
        }

        if (userLoginInput === adminData.login) {

            userPasswordInput = prompt('Enter your password','');
            if (userPasswordInput === adminData.password) {

                if (confirm('Do you want to change your password?')) {

                    if (prompt('Write the old password','') === adminData.password) {

                        adminData.NewPassword = prompt('Enter new password','');
                        if (adminData.NewPassword) {

                            if (adminData.NewPassword.length > minimalNewLoginLength) {

                                if (prompt('Enter new password again','') === adminData.NewPassword) {
                                    adminData.password = adminData.NewPassword;
                                    delete adminData.NewPassword;
                                    alert('You have successfully changed your password.');
                                } else {
                                    alert('You wrote the wrong password.');
                                }

                            } else {
                                alert('It\'s too short password. Sorry.');
                            }

                        } else {
                            alert('Canceled');
                        }

                    } else {
                        alert('Wrong password');
                    }

                } else {
                    alert('Canceled');
                }

            } else {
                alert('Wrong password');
            } 
        } 
        
        if (userLoginInput !== userData.login && userLoginInput !== adminData.login) {
            alert('I don\'t know you');
        }

    } else {
        alert('I don\'t know any emails having name length less than 5 symbols');
    }

} else {
    alert('Canceled');
}
