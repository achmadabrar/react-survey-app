//import { Session } from 'inspector';

const passport = require('passport');

module.exports= app =>{
    app.get(
        '/auth/google',
        passport.authenticate('google',{
            scope:['profile', 'email']
        })
    );

    app.get('/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('/surveys');  //untuk ngarahin ke mana setelah user login
    }
);
    
    app.get('/api/logout', (req,res) => {
         req.logout();
         res.redirect('/');  //untuk ngarahin ke root setelah logout
    });

    app.get('/api/current_user', (req,res) => {
        res.send(req.user);
        //res.send(req.session);
    });
};