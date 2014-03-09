module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less : {
      development: {
        options: {
          // look for bootstrap.less where bower installs it
          paths: ['./public/bower_components/bootstrap/less']
        },
        files: {
          // output css from the less
          './public/css/recipe.css' : './public/less/recipe.less'
        }
      }
    },
    watch: {
      // watch for changes to the less files
      files: "./public/less/*",
      tasks: ["less"]
    },
    nodestatic: {
        server: {
          options: {
            port: 8080,
            base: './public'
          }
        }
      }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodestatic');

  // compile less, run a server, and watch for less changes by default
  grunt.registerTask('default', ['less', 'nodestatic', 'watch']);
};
