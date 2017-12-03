module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.status(200).json({
            "route": "root",
            "err": null,
            "err_msg": "No Error"
        });
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    app.get('/login', function(req, res) {
        res.status(200).json({
            "route": "login",
            "err": null,
            "err_msg": "No Error"
        });
    });


    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/register', function(req, res) {
        res.status(200).json({
            "route": "register",
            "err": null,
            "err_msg": "No Error"
        });
    });


    // =====================================
    // INFO PERSO SECTION =====================
    // =====================================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.status(200).json({
            "route": "profile",
            "err": null,
            "err_msg": "No Error"
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.status(200).json({
            "route": "logout",
            "err": null,
            "err_msg": "No Error"
        });
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

        res.status(401).json({
            "route": "All",
            "err": "E_NOAUTH",
            "err_msg": "You're not authentified."
        });
}
