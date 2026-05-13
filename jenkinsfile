pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/fatimahtariq35/north.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'sudo rm -rf /var/www/north/*'
                sh 'sudo cp -r build/* /var/www/north/'
            }
        }
    }
}
