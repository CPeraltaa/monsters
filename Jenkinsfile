pipeline {
     agent any
     tools {nodejs "nodejs"}
     stages {
        stage("Tests") {
            steps {
                sh "npm install"
                sh "npm test"
            }
        }
        stage("Build"){
            steps{
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "rm -rf /var/www/jenkins-react-app"
                sh "cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}
