const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid')

const users = [
    {
        "email": "abc@abc.ca",
        "firstName": "ABC",
        "id": "5abf6783"
    },
    {
        "email": "xyz @xyz.ca",
        "firstName": "XYZ",
        "id": "5abf674563"
    }
]

//https://dal.brightspace.com/d2l/le/content/250793/viewContent/3445551/View
router.get('/users', (req, res) => {
    res.status(200).json({
        message: "Users retrieved",
        success: true,
        users: users

    })
})

router.put('/update/:id', (req, res) => {
    updateUser = req.body;
    //console.log(updateUser)

    const id = req.params.id;

    const user = users.find(user => user.id === id);
    if (updateUser?.email || updateUser?.firstName) {
        if (user) {
            if (updateUser?.email) {
                user.email = req.body.email
            }
            if (updateUser?.firstName) {
                user.firstName = req.body.firstName
            }

            return res.status(200).json({
                message: 'User updated',
                success: true,
            })
        }
        else {
            return res.status(404).json({
                message: 'User not found',
                success: false,

            });
        }
    }
    else {
        res.status(500).json({
            message: "Error"
        });
    }

});


router.post('/add', (req, res) => {
    const newUser = req.body;

    // generate a random ID for the new user
    //https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13
    // const id = Math.floor(Math.random() * 1000000).toString();

    //https://www.geeksforgeeks.org/node-js-npm-uuid/
    //https://www.tabnine.com/code/javascript/modules/uuidv4
    //https://stackoverflow.com/questions/20994768/how-to-reduce-length-of-uuid-generated-using-randomuuid
    const id = uuidv4().slice(0, 11).replace("-", "");
    ;

    // add the new user to the list
    newUser.id = id;

    //check if all the parameters are present
    if (newUser?.email && newUser?.firstName) {
        users.push(newUser);
        res.status(201).json({
            message: "User added",
            success: true
        })

    }
    else {
        res.status(500).json({
            message: "Error"
        })

    }

});

router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(users => users.id === id);
    if (user) {
        res.status(200).json({
            success: true,
            user: user
        });
    } else {
        res.status(404).json({
            success: false,
            message: "User not found"
        });
    }
});

//https://stackoverflow.com/questions/27465850/typeerror-router-use-requires-middleware-function-but-got-a-object/28379965#28379965
module.exports = router;