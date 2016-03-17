module.exports = function(grunt) {

  grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
	  cfg: {
		  paths: {
			  root: __dirname,
			  source: '<%= cfg.paths.root %>/src',
			  output: '<%= cfg.paths.root %>/dist',
			  bower: '<%= cfg.paths.root %>/bower_components'
		  }
	  },
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
		},
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
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');


  grunt.registerTask('default', ['clean copy connect', 'watch']);
  grunt.registerTask('help', 'displays console help', function() {
	grunt.log.writeln('Welcome to grunt help');  
	grunt.log.subhead('Maint tasks');  
	grunt.log.oklns('Welcome to grunt help');  
  });

};