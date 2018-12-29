module.exports = (grunt)=>{

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
// contatener les fichier js en un seul
        concat: {
            options: {
                separator: ';',
            },
            fusion: {
                src: [ 'js/easing/*'],
                dest: 'js/easing/min.js',
            },
        },
// réduire le poids des fichier js
        uglify: {
            fusion: {
                files: {
                    'js/easing/min.js': ['js/easing/min.js']
                }
            }
        },
// vérifier les fichiers js pour qu'il n'y ai aucune erreur
        jshint: {
            all: ['js/easing/*.js','!js/easing/min.js']
        },
// combiner les fichier css
        cssmin: {
            combine: {
                files: {
                    'css/min.css': ['style.css', 'style_1.css'],


                }
            }
        },
// vérifier les changement sur les fichier en sauvegarde taper au terminal grunt watch
        watch:{
            js: {
                files:['js/easing/*.js','!js/easing/min.js'],
                task:['jshint','uglify'],
                option: {spawn:false}
            },
            css: {
                files:['css/*.css','!css/min.css'],
                task:['cssmin'],
                option: {spawn:false}
            }

        },
// réduire les fichier image
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'img/min'
                }]
            }
        },
// remplacer le chemin des fichier image par ceux réduit
        replace: {
            fichier_CSS: {
                src: ['css/min.css'],
                overwrite: true,
                replacements: [{
                    from: 'img/',
                    to: "img/min/"
                }]
            }
        }

    });


// Enregistre les commande qui sont dans le fichier package.json le plugin ce trouve sur github load-grunt-tasks
//    https://github.com/sindresorhus/load-grunt-tasks


    grunt.registerTask('default',['jshint','concat','uglify','cssmin','imagemin','replace']);

}