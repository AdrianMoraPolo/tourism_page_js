const adminController = {};


//Request re hacer una petición
//list luego lo usamos en alumno.js


adminController.list = (req, res) => {
    //error y conexsión, si la hace haces un select * from user
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario', (err, users) => {
            //res.render user.ejs
            res.render('admin', {
                // a ver, la info del SELECT que hemos hecho la almacenamos en este caso en el parametro "alumnos". hacemos un res render hacia alumno.ejs y donde ponga data va a meter la info de la bbdd
                data: users
            });
        });
    });
};


adminController.save = (req, res) => {
    // console.log(req.body)
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuario set ?', [data], (err, users) => {
            res.redirect('/admin');
        })
    })
};

adminController.edit = (req,res) =>{
    const id = req.params.id;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM usuario WHERE iduser = ?', [id], (err, users)=>{
            res.render('edit', {
                data: users[0]
            });
        });
    });
};   

adminController.update=(req, res)=>{
    const id=req.params.id;
    //aqui recibo los nuevos datos
    const newuser=req.body
    req.getConnection((err, conn) => {
        conn.query('UPDATE  usuario set ? WHERE iduser = ?', [newuser, id], (err,rows) =>{
            res.redirect('/admin')
        })
    })
}

//Delete alumno por id
adminController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuario WHERE iduser = ?', [id], (err, users) => {
            console.log(id);
            res.redirect('/admin');
        });
    });
};



module.exports = adminController;