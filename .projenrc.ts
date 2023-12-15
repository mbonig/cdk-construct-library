import { cdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';

const project = new cdk.JsiiProject({
  author: 'Matthew Bonig',
  authorAddress: 'matthew.bonig@gmail.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: '@matthewbonig/cdk-construct-library',
  npmAccess: NpmAccess.PUBLIC,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/mbonig/cdk-construct-library.git',
  deps: ['projen', 'yaml', 'case'],
  depsUpgrade: false,
});

project.synth();
