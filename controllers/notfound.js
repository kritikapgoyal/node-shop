exports.notFound = (req, res) => {
    res.status(404).render('not-found.ejs', {
        pageTitle: 'Page Not Found',
    });
};
