const { userService } = require('../service/index.js')
const { createHash } = require('../utils/bcryptHash')


class UserController {
    // ------------>>>>>> GET <<<<<<------------
    getUsers = async (req, res) => {
        try {
            let users = await userService.getUsers()
            res.send({
                status: 'success',
                payload: users
            })
        } catch (error) {
            console.log(error)
            res.send({ status: 'error', ERROR: error })
        }
    }

    // ------------>>>>>> POST <<<<<<------------
    createUsers = async (req, res) => {
        try {
            let user = req.body
            const newUser = {
                first_name: user.nombre,
                last_name: user.apellido,
                email: user.email,
                date_of_birth: user.date_of_birth,
                password: user.password
            }
            let result = await userService.addUser(newUser)
            res.status(200).send({ result })
        } catch (error) {
            console.log(error)
            res.send({ status: 'error', ERROR: error })
        }
    }

    // ------------>>>>>> PUT <<<<<<------------
    updateUsers = async (req, res) => {
        try {
            //const { email } = req.params;
            const user = req.body;
    
            let userToReplace = {
                firstName: user.nombre,
                lastName: user.apellido,
                email: user.email,
                date_of_birth: user.date_of_birth,
                password: user.password ? createHash(user.password) : undefined,
            };
    
            let result = await userService.updateUserByEmail(user.email, userToReplace);
    
            res.status(200).send({
                status: "success",
                payload: result,
            });
        } catch (error) {
            res.send({
                status: "error",
                error: error,
            });
            console.log(error);
        }
    }

    // ------------>>>>>> DELETE <<<<<<------------
    deleteUsers = async (req, res) => {
        try {
            const { uid } = req.params;
    
            let result = await userService.deleteUser(uid);
    
            res.status(200).send({
                status: 'success',
                payload: result,
            });
        } catch (error) {
            res.send({
                status: 'error',
                error: error,
            })
            console.log(error)
        }
    }
}

module.exports = new UserController();