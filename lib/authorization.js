var Promise = require('es6-promise').Promise;

/**
 *
 */
module.exports = function(store, graph) {

  /**
   *
   */
  this.create = function(req) {
    return new Promise(function(resolve, reject){
      var triple = {
        subject: req.body.id,
        predicate: 'http://www.w3.org/ns/auth/acl#acl',
        object: req.token.sub
      };
      graph.put(triple, function(err){
        if(err) reject(err);
        resolve(req.body);
      });
    });
  };

  /**
   *
   */
  this.get = function(uri) {
    return new Promise(function(resolve, reject) {
      var pattern = {
        subject: uri,
        predicate: 'http://www.w3.org/ns/auth/acl#acl'
      };
      graph.get(pattern, function(err, result) {
        if(err) reject(err);
        resolve(result[0]);
      });
    });
  };

  /**
   *
   */
  this.delete = function(doc) {
    return new Promise(function(resolve, reject) {
      this.get(doc.id)
      .then(function(auth){
        graph.del(auth, function(err) {
          if(err) reject(err);
          resolve();
        });
      });
    }.bind(this));
  }.bind(this);

};
