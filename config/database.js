// This is the path to the database... we don't want any configuration
// information in the main code folders, but we *do* want it in the
// repository for fast deployment.
module.exports = {
    'url'   : 'ec2-54-242-130-6.compute-1.amazonaws.com' // TODO: put the path to your database, such as 'mongodb://100.2.5.6/mydatabase'
};
