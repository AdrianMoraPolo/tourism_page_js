const bookingsController = {};

bookingsController.save = (req, res) => {
    // console.log(req.body)
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO user set ?', [data], (err, users) => {
            res.redirect('/');
            console.log(err);
        })
    })
};

module.exports = bookingsController;