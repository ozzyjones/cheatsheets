
module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      markdownlint: {
        full: {
          options: {
            config: { //configure the linting rules
              'default': true,
              'line-length': false,
              'blanks-around-headers': false,
              'no-duplicate-header': false,
              'no-inline-html': false
            }
          },
          src: [
            '*.md'
          ]
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-markdownlint');
  
    grunt.registerTask('default', ['markdownlint']);
  };