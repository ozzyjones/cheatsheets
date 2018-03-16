
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
              'no-inline-html': false,
              'fenced-code-language': false,
              'header-style': {'style': 'setext_with_atx_closed'},
              'no-hard-tabs': {'code_blocks': false},
              'ul-style': {'style': 'sublist'}
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