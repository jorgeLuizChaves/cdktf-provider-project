const { CdktfProviderProject } = require('@cdktf/provider-project');
const { Semver } = require('projen');

const project = new CdktfProviderProject({
  terraformProvider: "confluentinc/confluent@~> 2.9.0",
});

project.synth();