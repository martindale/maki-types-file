var util = require('util');

var FileType = function( mongoose ) {
  var Schema = mongoose.Schema;
  var SchemaType = mongoose.SchemaType;
  var Types = mongoose.Types;
  var mongo = mongoose.mongo;
  
  var File = function( key , options ) {
    SchemaType.call(this, key, options);
  };
  
  util.inherits( File , SchemaType );
  
  Schema.Types.File = File;
  Types.File = File;
  
  return File;
  
};
