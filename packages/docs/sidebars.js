/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure

    // But you can create a sidebar manually
    apiSidebar: [
        {
            type: 'doc',
            label: '👏 Welcome',
            id: 'welcome',
        },
        {
            type: 'doc',
            label: '🤝 Testnet Deployment',
            id: 'testnet-deployment',
        },
        {
            type: 'category',
            label: '📘 Protocol',
            items: [
                {
                    type: 'doc',
                    label: 'Users and Attesters',
                    id: 'protocol/users-and-attesters',
                },
                {
                    type: 'doc',
                    label: 'Epoch',
                    id: 'protocol/epoch',
                },
                {
                    type: 'doc',
                    label: 'Epoch Key',
                    id: 'protocol/epoch-key',
                },
                {
                    type: 'doc',
                    label: 'Reputation',
                    id: 'protocol/reputation',
                },
                {
                    type: 'doc',
                    label: 'User State Transition',
                    id: 'protocol/user-state-transition',
                },
                {
                    type: 'doc',
                    label: 'Trees',
                    id: 'protocol/trees',
                },
                {
                    type: 'doc',
                    label: 'Nullifiers',
                    id: 'protocol/nullifiers',
                },
                {
                    type: 'doc',
                    label: 'Attestation',
                    id: 'protocol/attestation',
                },
            ],
        },
        {
            type: 'category',
            label: '@unirep/core',
            items: [
                {
                    type: 'doc',
                    label: 'UserState',
                    id: 'core-api/user-state',
                },
                {
                    type: 'doc',
                    label: 'Synchronizer',
                    id: 'core-api/synchronizer',
                },
                {
                    type: 'doc',
                    label: 'schema',
                    id: 'core-api/schema',
                },
            ],
        },
        {
            type: 'category',
            label: '@unirep/contracts',
            items: [
                {
                    type: 'doc',
                    label: 'Unirep.sol',
                    id: 'contracts-api/unirep-sol',
                },
                {
                    type: 'doc',
                    label: 'IVerifier.sol',
                    id: 'contracts-api/iverifier-sol',
                },
                {
                    type: 'doc',
                    label: 'Error codes',
                    id: 'contracts-api/errors',
                },
            ],
        },
        {
            type: 'category',
            label: '@unirep/circuits',
            items: [
                {
                    type: 'doc',
                    label: 'Circuits',
                    id: 'circuits-api/circuits',
                },
                {
                    type: 'doc',
                    label: 'Prover',
                    id: 'circuits-api/prover',
                },
                {
                    type: 'doc',
                    label: 'defaultProver',
                    id: 'circuits-api/default-prover',
                },
                {
                    type: 'doc',
                    label: 'networkProver',
                    id: 'circuits-api/network-prover',
                },
                {
                    type: 'doc',
                    label: 'BaseProof',
                    id: 'circuits-api/base-proof',
                },
                {
                    type: 'doc',
                    label: 'ReputationProof',
                    id: 'circuits-api/reputation-proof',
                },
                {
                    type: 'doc',
                    label: 'EpochKeyProof',
                    id: 'circuits-api/epoch-key-proof',
                },
                {
                    type: 'doc',
                    label: 'EpochKeyLiteProof',
                    id: 'circuits-api/epoch-key-lite-proof',
                },
                {
                    type: 'doc',
                    label: 'SignupProof',
                    id: 'circuits-api/signup-proof',
                },
                {
                    type: 'doc',
                    label: 'UserStateTransitionProof',
                    id: 'circuits-api/user-state-transition-proof',
                },
            ],
        },
        {
            type: 'category',
            label: '@unirep/utils',
            items: [
                {
                    type: 'doc',
                    label: 'hash()',
                    id: 'utils-api/hashes',
                },
                {
                    type: 'link',
                    label: 'genEpochKey()',
                    href: '/docs/utils-api/hashes#genepochkey',
                },
                {
                    type: 'link',
                    label: 'genEpochNullifier()',
                    href: '/docs/utils-api/hashes#genepochnullifier',
                },
                {
                    type: 'link',
                    label: 'genStateTreeLeaf()',
                    href: '/docs/utils-api/hashes#genstatetreeleaf',
                },
                {
                    type: 'doc',
                    label: 'IncrementalMerkleTree',
                    id: 'utils-api/incremental-tree',
                },
                {
                    type: 'doc',
                    label: 'SparseMerkleTree',
                    id: 'utils-api/sparse-tree',
                },
            ],
        },
    ],
}

module.exports = sidebars
