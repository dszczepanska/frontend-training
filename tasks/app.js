'use strict'

module.exports = function(grunt) {
	
	var appConfig = {
		clean: {	
	  
			output: '<%= cfg.paths.output %>',
			options: {
				force: true
			}
		},
	  copy:  {
		main: {
			src: 'src/*',
			dest: 'dest/*'
		},
		pulpa: {
			src: '<%= cfg.paths.source %>/index.html',
			dest: '<%= cfg.paths.output %>/index.html'
		},
		res2: {
			src: '<%= cfg.paths.source %>/index.html',
			dest: '<%= cfg.paths.output %>/index.html'
		}
	},
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
	  
		files: ['<%= cfg.paths.output %>/index.html'],
		tasks: [],
		options: {
		  livereload: true,
		}	 
	}
	}

  grunt.config.merge(appConfig);

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('app', ['clean', 'copy', 'connect', 'watch']);

};