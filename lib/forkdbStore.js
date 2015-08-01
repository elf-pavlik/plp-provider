var Promise = require('es6-promise').Promise;
var concat = require('concat-stream');

module.exports = function(fdb) {

  this.get = function(uri){
    return new Promise(function(resolve, reject){
      var headsCS = concat(function(hashes) {
      console.log(hashes);
        var readCS = concat(function(buffer){
          resolve(JSON.parse(buffer.toString()));
        });
        var r = fdb.createReadStream(hashes[0].hash);
        r.pipe(readCS);
      });
      var h = fdb.heads(uri);
      h.pipe(headsCS);
    });
  };

  this.create = function(profile) {
    this.save(profile);
  };

  this.replace = function(profile){
    this.get(profile.id)
    .then(function(prev) {
      this.save(profile, prev.id);
    });
  };

  this.save = function(profile, prevId) {
    return new Promise(function(resolve, reject){
      var meta = { key: profile.id };
      if (prevId) meta.prev = prevId;
      var w = fdb.createWriteStream(meta, function(err, id) {
        if (err) reject(err);
        else {
          resolve(profile);
        }
      });
      w.end(JSON.stringify(profile));
    });
  };

  /**
   * deletes resource
   */
  this.delete = function(doc){
    return new Promise(function(resolve, reject){
      //TODO
    });
  };

};
