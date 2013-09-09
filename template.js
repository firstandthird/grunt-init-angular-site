
exports.description = 'Angular Site';

exports.warnOn = '*';

exports.template = function(grunt, init, done) {

  init.process({ type: 'angular-site' }, [
    init.prompt('name'),
  ], function(err, props) {

    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);
    done();
  });
};
