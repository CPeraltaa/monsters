pipeline {
     agent any     
     stages {
        stage("Tests") {
            steps {
                sh "sudo npm install"
                sh "sudo npm test"
            }
        }
        stage("Build"){
            steps{
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app"
                sh "sudo su cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}
