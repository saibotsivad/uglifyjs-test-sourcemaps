module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-clean') // delete files and folders
	grunt.loadNpmTasks('grunt-contrib-concat') // concatenate files
	grunt.loadNpmTasks('grunt-contrib-uglify') // minify files

	grunt.initConfig({
		build_dir: 'build/out',
		clean: {
			src: [
				'<%= build_dir %>'
			]
		},
		concat: {
			options: {
				// separator: ';\n',
				stripBanners: false,
				sourceMap: true,
				sourceMapStyle: 'embed'
			},
			compile_js: {
				src: [
					'concat.prefix',
					'file1.js',
					'file2.js',
					'concat.suffix'
				],
				cwd: '.',
				dest: '<%= build_dir %>/out.js'
			}
		},
		uglify: {
			compile: {
				options: {
					banner: '/* awww yisss */',
					preserveComments: false,
					sourceMap: true,
					sourceMapIncludeSources: true,
					mangle: false,
					sourceMapIn: '<%= concat.compile_js.dest %>.map'
				},
				files: {
					'<%= concat.compile_js.dest %>': '<%= concat.compile_js.dest %>'
				}
			}
		}
	})
}
