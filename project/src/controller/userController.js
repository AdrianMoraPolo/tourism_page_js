const userController = {};


//Request re hacer una petición
//list luego lo usamos en alumno.js


userController.list = (req, res) => {
    //error y conexsión, si la hace haces un select * from user
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM user', (err, users) => {
            //res.render user.ejs
            res.render('admin', {
                // a ver, la info del SELECT que hemos hecho la almacenamos en este caso en el parametro "alumnos". hacemos un res render hacia alumno.ejs y donde ponga data va a meter la info de la bbdd
                data: users
            });
        });
    });
};


userController.save = (req, res) => {
    // console.log(req.body)
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO user set ?', [data], (err, users) => {
            res.redirect('/admin')
        })
    })
};

userController.edit = (req,res) =>{
    const id = req.params.id;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM user WHERE iduser = ?', [id], (err, users)=>{
            res.render('edit', {
                data: users[0]
            });
        });
    });
};   

userController.update=(req, res)=>{
    const id=req.params.id;
    //aqui recibo los nuevos datos
    const newuser=req.body
    req.getConnection((err, conn) => {
        conn.query('UPDATE  user set ? WHERE iduser = ?', [newuser, id], (err,rows) =>{
            res.redirect('/admin')
        })
    })
}

//Delete alumno por id
userController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM user WHERE iduser = ?', [id], (err, users) => {
            console.log(id);
            res.redirect('/admin');
        });
    });
};



module.exports = userController;