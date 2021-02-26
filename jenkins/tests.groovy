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
        stage('Run tests') {
            steps {
                sh '''#!/bin/bash
                    npm run test:unit
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
