pipeline {
    agent any
    stages {
        stage('instal node modules') {
            steps {
                sh '''#!/bin/bash
                    npm install
                '''
            }
        }
        stage('build application') {
            steps {
                sh '''#!/bin/bash
                    npm run build
                '''
            }
        }
    }
    post {
        always {
            echo 'Delete directory'
            deleteDir()
        }
    }
}
