import { cdk } from 'projen';

const project = new cdk.JsiiProject({
  author: 'Matthew Bonig',
  authorAddress: 'matthew.bonig@gmail.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: '@matthewbonig/cdk-construct-library',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/mbonig/cdk-construct-library.git',
  deps: ['projen', 'yaml', 'case'],
});

project.synth();
