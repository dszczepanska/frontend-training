'use strict'

module.exports = function(grunt) {
  grunt.registerTask('help', 'displays console help', function() {
	grunt.log.writeln('Welcome to grunt help');  
	grunt.log.subhead('Maint tasks');  
	grunt.log.oklns('Welcome to grunt help');  
  });
};