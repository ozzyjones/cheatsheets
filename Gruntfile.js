
module.exports = function(grunt) {

    // Project configuration.
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
            // 'README.md',
            // '.github/*.md'
            '*.md'
          ]
        }
      }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-markdownlint');
  
    // Default task(s).
    grunt.registerTask('default', ['markdownlint']);
  
  };