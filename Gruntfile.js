module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
    server: {
      options: {
        port: 8000,
        hostname: '*',
		keepalive: false,
		open: true,
		livereload: true
        }
      }
    },
	watch: {
	  
		files: ['index.html'],
		tasks: [],
		options: {
		  livereload: true,
		}
	 
	},
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['connect', 'watch']);

};