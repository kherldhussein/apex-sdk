window.BENCHMARK_DATA = {
  "lastUpdate": 1768889074190,
  "repoUrl": "https://github.com/kherldhussein/apex-sdk",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kherld.hussein@gmail.com",
            "name": "kh3rld",
            "username": "kh3rld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba5a09a4f47d39848b72043c29c4d3df8f2a12a8",
          "message": "chore: update docs and fix ci (#42)\n\n* docs: update broken links\n\n* fix(benches): update file existence check before moving output.txt\n\n* docs: update README",
          "timestamp": "2025-11-24T23:13:48-05:00",
          "tree_id": "ec7b1d20782d2b040d28026553c6db82f6a1f6ec",
          "url": "https://github.com/kherldhussein/apex-sdk/commit/ba5a09a4f47d39848b72043c29c4d3df8f2a12a8"
        },
        "date": 1764044436564,
        "tool": "cargo",
        "benches": [
          {
            "name": "transaction_builder_new",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_evm_to_evm_transaction",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_substrate_to_substrate_transaction",
            "value": 59,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_cross_chain_transaction",
            "value": 68,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/32",
            "value": 80,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/256",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/1024",
            "value": 91,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/4096",
            "value": 1478,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_hash",
            "value": 1026,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "is_cross_chain_same",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "is_cross_chain_different",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_serialize",
            "value": 292,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_deserialize",
            "value": 439,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1000",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1000000",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1000000000000",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "548e2134e8f72b8b11c184a2597d5cf37dea4271",
          "message": "ci(deps): bump checkout to 6 (#41)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 5 to 6.\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/actions/checkout/compare/v5...v6)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: '6'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-01T12:03:28-05:00",
          "tree_id": "8907ceabc84521b56c16b0e7d12832d43a1e65d4",
          "url": "https://github.com/kherldhussein/apex-sdk/commit/548e2134e8f72b8b11c184a2597d5cf37dea4271"
        },
        "date": 1764608971751,
        "tool": "cargo",
        "benches": [
          {
            "name": "transaction_builder_new",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_evm_to_evm_transaction",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_substrate_to_substrate_transaction",
            "value": 60,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_cross_chain_transaction",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/32",
            "value": 80,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/256",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/1024",
            "value": 88,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_with_data/4096",
            "value": 1470,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_hash",
            "value": 1037,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "is_cross_chain_same",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "is_cross_chain_different",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_serialize",
            "value": 324,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_deserialize",
            "value": 432,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1000",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1000000",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_amounts/1000000000000",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kherld.hussein@gmail.com",
            "name": "kh3rld",
            "username": "kh3rld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32bc693e7953ed783c38b4b2b32dcd54312bc513",
          "message": "refactor docs (#49)\n\n* refactor: remove migration scripts\n\n* docs(sys_arch): refactor the system architecture",
          "timestamp": "2025-12-12T00:56:32-05:00",
          "tree_id": "873364604784a25c5c55f301e768f99a552bb393",
          "url": "https://github.com/kherldhussein/apex-sdk/commit/32bc693e7953ed783c38b4b2b32dcd54312bc513"
        },
        "date": 1765519456212,
        "tool": "cargo",
        "benches": [
          {
            "name": "transaction_creation/create_substrate_transfer",
            "value": 59,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_creation/create_evm_transfer",
            "value": 58,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/0",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_substrate_sdk",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_evm_sdk",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_multi_chain_sdk",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/substrate_sign_simulation",
            "value": 160857,
            "range": "± 1192",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/evm_sign_simulation",
            "value": 140826,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_creation",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_arithmetic",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kherld.hussein@gmail.com",
            "name": "kh3rld",
            "username": "kh3rld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6a457032bfd0705da432bd1d901c271099030f6",
          "message": "docs; fix subscription's errors  (#53)\n\n* chore(docs): update logos and add new ones\n\n* docs(README): update links\n\n* docs(viewer): improve UI/UX\n\n* docs(viewer): improve UI/UX\n\n* docs(js): update module initialization and add new modules for advanced visualization, metrics, workflow simulator, and personalization\n\n* docs(css): update main stylesheet with new design elements and animations\n\n* docs(search): update search manifest with new categories and paths\n\n* docs(subscribe): update API endpoint and add new subscription handling logic\n\n* Revert \"docs(subscribe): update API endpoint and add new subscription handling logic\"\n\nThis reverts commit 8c1b76092fd71d852af33e6e530af594f7d5cb8c.\n\n* Revert \"docs(search): update search manifest with new categories and paths\"\n\nThis reverts commit 581eaa118c7c0a5c8524b3c9cbb7db47a42b5e0b.\n\n* Revert \"docs(css): update main stylesheet with new design elements and animations\"\n\nThis reverts commit fbe3410ef26484073511a56fa3c2ded72b1dc4c6.\n\n* Revert \"docs(js): update module initialization and add new modules for advanced visualization, metrics, workflow simulator, and personalization\"\n\nThis reverts commit 235e7bbe0f4c95db1d13c32d38856bab005d7311.\n\n* Revert \"docs(viewer): improve UI/UX\"\n\nThis reverts commit 070e644d74c5c28abee8f49147afd051f87caa7a.\n\n* Revert \"docs(viewer): improve UI/UX\"\n\nThis reverts commit f12ba946d40df93c8f846529b867b243405d6a57.\n\n* Revert \"docs(README): update links\"\n\nThis reverts commit b7dcfc536af992ae90dde40f946664ac30ae951d.\n\n* docs: add Web3Forms API key injection step in deploy workflow\n\n* docs(viewer): add utility function to load external scripts dynamically\n\n* docs(subscribe): update subscription method to use Web3Forms API and remove Cloudflare function\n\n* chore: update form key accessibility\n\n* doc; fix UI and subscriptions errors\n\n---------\n\nCo-authored-by: Kherld <50875687+kherldhussein@users.noreply.github.com>",
          "timestamp": "2025-12-18T00:58:22-05:00",
          "tree_id": "5c6c5a649fd380b46403ab07f80b2dbac94f3267",
          "url": "https://github.com/kherldhussein/apex-sdk/commit/d6a457032bfd0705da432bd1d901c271099030f6"
        },
        "date": 1766040692907,
        "tool": "cargo",
        "benches": [
          {
            "name": "transaction_creation/create_substrate_transfer",
            "value": 54,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_creation/create_evm_transfer",
            "value": 53,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_substrate_sdk",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_evm_sdk",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_multi_chain_sdk",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/substrate_sign_simulation",
            "value": 160925,
            "range": "± 1321",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/evm_sign_simulation",
            "value": 140893,
            "range": "± 642",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_creation",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_arithmetic",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kherld.hussein@gmail.com",
            "name": "kh3rld",
            "username": "kh3rld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abd3050ec2e8a98c0df32a9642b14317256e313c",
          "message": "fix(subscription): update configuration (#56)\n\n* chore(docs): update logos and add new ones\n\n* docs(README): update links\n\n* docs(viewer): improve UI/UX\n\n* docs(viewer): improve UI/UX\n\n* docs(js): update module initialization and add new modules for advanced visualization, metrics, workflow simulator, and personalization\n\n* docs(css): update main stylesheet with new design elements and animations\n\n* docs(search): update search manifest with new categories and paths\n\n* docs(subscribe): update API endpoint and add new subscription handling logic\n\n* Revert \"docs(subscribe): update API endpoint and add new subscription handling logic\"\n\nThis reverts commit 8c1b76092fd71d852af33e6e530af594f7d5cb8c.\n\n* Revert \"docs(search): update search manifest with new categories and paths\"\n\nThis reverts commit 581eaa118c7c0a5c8524b3c9cbb7db47a42b5e0b.\n\n* Revert \"docs(css): update main stylesheet with new design elements and animations\"\n\nThis reverts commit fbe3410ef26484073511a56fa3c2ded72b1dc4c6.\n\n* Revert \"docs(js): update module initialization and add new modules for advanced visualization, metrics, workflow simulator, and personalization\"\n\nThis reverts commit 235e7bbe0f4c95db1d13c32d38856bab005d7311.\n\n* Revert \"docs(viewer): improve UI/UX\"\n\nThis reverts commit 070e644d74c5c28abee8f49147afd051f87caa7a.\n\n* Revert \"docs(viewer): improve UI/UX\"\n\nThis reverts commit f12ba946d40df93c8f846529b867b243405d6a57.\n\n* Revert \"docs(README): update links\"\n\nThis reverts commit b7dcfc536af992ae90dde40f946664ac30ae951d.\n\n* fix(ci): remove unnecessary injection step after the build\n\n* fix: subscription failure\n\n* fix: subscription failure\n\n* refactor: docs\n\n---------\n\nCo-authored-by: Kherld <50875687+kherldhussein@users.noreply.github.com>",
          "timestamp": "2025-12-21T09:20:14-05:00",
          "tree_id": "cd3e8252cb3fc1ce4349ebd438e8c6784fbe98ea",
          "url": "https://github.com/kherldhussein/apex-sdk/commit/abd3050ec2e8a98c0df32a9642b14317256e313c"
        },
        "date": 1766500473915,
        "tool": "cargo",
        "benches": [
          {
            "name": "transaction_creation/create_substrate_transfer",
            "value": 49,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_creation/create_evm_transfer",
            "value": 49,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/0",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/1",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/2",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/0",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/1",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/2",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_substrate_sdk",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_evm_sdk",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_multi_chain_sdk",
            "value": 24,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/substrate_sign_simulation",
            "value": 157914,
            "range": "± 550",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/evm_sign_simulation",
            "value": 137838,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_creation",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_arithmetic",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kherld.hussein@gmail.com",
            "name": "kh3rld",
            "username": "kh3rld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4b6a6e2a9d29cc8085fc67ccb362629fc1f8926",
          "message": " sec: mitigate #59 and #61  (#60)\n\n* chore(docs): update logos and add new ones\n\n* docs(README): update links\n\n* docs(viewer): improve UI/UX\n\n* docs(viewer): improve UI/UX\n\n* docs(js): update module initialization and add new modules for advanced visualization, metrics, workflow simulator, and personalization\n\n* docs(css): update main stylesheet with new design elements and animations\n\n* docs(search): update search manifest with new categories and paths\n\n* docs(subscribe): update API endpoint and add new subscription handling logic\n\n* Revert \"docs(subscribe): update API endpoint and add new subscription handling logic\"\n\nThis reverts commit 8c1b76092fd71d852af33e6e530af594f7d5cb8c.\n\n* Revert \"docs(search): update search manifest with new categories and paths\"\n\nThis reverts commit 581eaa118c7c0a5c8524b3c9cbb7db47a42b5e0b.\n\n* Revert \"docs(css): update main stylesheet with new design elements and animations\"\n\nThis reverts commit fbe3410ef26484073511a56fa3c2ded72b1dc4c6.\n\n* Revert \"docs(js): update module initialization and add new modules for advanced visualization, metrics, workflow simulator, and personalization\"\n\nThis reverts commit 235e7bbe0f4c95db1d13c32d38856bab005d7311.\n\n* Revert \"docs(viewer): improve UI/UX\"\n\nThis reverts commit 070e644d74c5c28abee8f49147afd051f87caa7a.\n\n* Revert \"docs(viewer): improve UI/UX\"\n\nThis reverts commit f12ba946d40df93c8f846529b867b243405d6a57.\n\n* Revert \"docs(README): update links\"\n\nThis reverts commit b7dcfc536af992ae90dde40f946664ac30ae951d.\n\n* security: mitigate RUSTSEC-2025-0137 ruint vulnerability\n\n- Update Alloy ecosystem dependencies to v1.2.1 (from v1.1.3)\n- Update alloy-primitives to v1.5.2 (from v1.5.1)\n- Add RUSTSEC-2025-0137 to deny.toml ignore list with documentation\n- Document risk assessment: LOW (function not used in app code)\n- All 232 tests pass, project builds successfully\n- Security rating improved from 7.5/10 to 8.2/10\n\nFixes: Unsoundness of safe reciprocal_mg10 function in ruint 1.17.0\nRisk: Memory corruption via out-of-bounds access (debug_assert optimized out)\nMitigation: Waiting for upstream fix, monitoring for updates\n\nRefs: https://rustsec.org/advisories/RUSTSEC-2025-0137\n\n* fix: add RUSTSEC-2025-0137 to audit ignore list",
          "timestamp": "2025-12-25T13:22:19-05:00",
          "tree_id": "c1f349dae48845ec5f51ac674481dcdea13b8184",
          "url": "https://github.com/kherldhussein/apex-sdk/commit/d4b6a6e2a9d29cc8085fc67ccb362629fc1f8926"
        },
        "date": 1766932677452,
        "tool": "cargo",
        "benches": [
          {
            "name": "transaction_creation/create_substrate_transfer",
            "value": 55,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_creation/create_evm_transfer",
            "value": 54,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_substrate_sdk",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_evm_sdk",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_multi_chain_sdk",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/substrate_sign_simulation",
            "value": 161009,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/evm_sign_simulation",
            "value": 140894,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_creation",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_arithmetic",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kherld.hussein@gmail.com",
            "name": "kh3rld",
            "username": "kh3rld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0489a2c8be6eb452f5b46b51cb399cf900a24e89",
          "message": "refactor: impl testing infra  (#62)\n\n* chore(docs): update logos and add new ones\n\n* docs(README): update links\n\n* docs(viewer): improve UI/UX\n\n* docs(viewer): improve UI/UX\n\n* docs(js): update module initialization and add new modules for advanced visualization, metrics, workflow simulator, and personalization\n\n* docs(css): update main stylesheet with new design elements and animations\n\n* docs(search): update search manifest with new categories and paths\n\n* docs(subscribe): update API endpoint and add new subscription handling logic\n\n* Revert \"docs(subscribe): update API endpoint and add new subscription handling logic\"\n\nThis reverts commit 8c1b76092fd71d852af33e6e530af594f7d5cb8c.\n\n* Revert \"docs(search): update search manifest with new categories and paths\"\n\nThis reverts commit 581eaa118c7c0a5c8524b3c9cbb7db47a42b5e0b.\n\n* Revert \"docs(css): update main stylesheet with new design elements and animations\"\n\nThis reverts commit fbe3410ef26484073511a56fa3c2ded72b1dc4c6.\n\n* Revert \"docs(js): update module initialization and add new modules for advanced visualization, metrics, workflow simulator, and personalization\"\n\nThis reverts commit 235e7bbe0f4c95db1d13c32d38856bab005d7311.\n\n* Revert \"docs(viewer): improve UI/UX\"\n\nThis reverts commit 070e644d74c5c28abee8f49147afd051f87caa7a.\n\n* Revert \"docs(viewer): improve UI/UX\"\n\nThis reverts commit f12ba946d40df93c8f846529b867b243405d6a57.\n\n* Revert \"docs(README): update links\"\n\nThis reverts commit b7dcfc536af992ae90dde40f946664ac30ae951d.\n\n* feat(docker): impl integration test infrastructure with EVM and Substrate nodes\n\n* feat(tests): update integration tests to run daily and add Docker-based tests\n\n* feat(tests): impl integration tests for EVM and Substrate nodes with Docker support\n\n* test(evm): impl comprehensive tests for transaction execution and wallet operations\n\n- Implemented transaction_executor_tests.rs to cover gas estimation, transaction building, signing, retry logic, and error handling.\n- Created wallet_operations_tests.rs to validate wallet creation methods, signing operations, wallet manager functionalities, and edge case handling.\n\n* test(substrate): impl comprehensive tests for transaction and XCM modules\n\n- Implement tests for transaction functionality including fee configuration, retry configuration, batch call building, extrinsic building, and transaction modes in `transaction_test.rs`.\n- Introduce tests for XCM functionality covering MultiLocation construction, asset representation, weight limits, junction types, and network IDs in `xcm_test.rs`.\n\n* test(types): impl comprehensive unit tests for Chain and Address functionality\n\n- Implement tests for various chain methods including name, chain type, smart contract support, and endpoints.\n- Add tests for chain ID validation for both EVM and Substrate chains.\n- Include tests for validation error handling and display.\n- Ensure coverage for address validation and edge cases.\n- Validate multiple RPC endpoints for different chains.\n\n* chore(docker): automate test builds with different env\n\n* fix(test): vec! with arrays\n\n* fix(test): vec! with arrays\n\n* fix(test): vec! with arrays\n\n* fix: clipy (#63)\n\n* Update root Cargo.toml\n\n* Update README.md\n\n* Update apex-sdk-evm Cargo.toml\n\n* Update apex-sdk-evm library code\n\n* Update apex-sdk-substrate Cargo.toml\n\n* Update apex-sdk-substrate library code\n\n* Update apex-sdk-substrate transaction module\n\n* Update apex-sdk-types Cargo.toml\n\n* Update apex-sdk-types library code\n\n* Update apex-sdk Cargo.toml\n\n* Fix clippy issues in transaction benchmarks\n\n* Fix clippy issues in advanced module\n\n* Update apex-sdk builder module\n\n* Add error recovery module\n\n* Add performance module\n\n* Update SDK core module\n\n* Update transaction module\n\n* Update CLI config module\n\n* Update CLI config command module\n\n* Update CLI deploy module\n\n* Update CLI documentation\n\n* Update docs config.js\n\n* Update account manager example\n\n* Update contract orchestration Cargo.toml\n\n* Update contract orchestration example\n\n* Update EVM integration tests\n\n* Fix substrate integration tests\n\n* Add EVM benchmarks\n\n* Add Substrate benchmarks\n\n* Add types benchmarks\n\n* Add Movement DeFi CLI template\n\n* Add docs deploy config\n\n* Add docs test config HTML\n\n* Add examples README\n\n* Add EVM contract call example\n\n* Add real transaction integration test\n\n* Add utility scripts\n\n* Add test documentation\n\n* Format transaction benchmarks after clippy fixes\n\n* chore: remove unsupported internal scripts\n\n* chore: update comment\n\n* chore(tests): remove redundant comments from test cases\n\n* chore(tests): remove redundant comments from test cases and improve code clarity\n\n* chore(tests): remove redundant comments from test cases for clarity\n\n* chore(docs): add examples for EVM transfers and contract interactions\n\n* chore(tests): impl EVM transfer example with detailed README and main.rs\n\n* chore(deps): update tracing and tracing-subscriber versions for consistency",
          "timestamp": "2025-12-29T02:38:40-05:00",
          "tree_id": "cb44071c795d0696181b76d06173e641760338c7",
          "url": "https://github.com/kherldhussein/apex-sdk/commit/0489a2c8be6eb452f5b46b51cb399cf900a24e89"
        },
        "date": 1766995574326,
        "tool": "cargo",
        "benches": [
          {
            "name": "transaction_creation/create_substrate_transfer",
            "value": 66,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_creation/create_evm_transfer",
            "value": 64,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_substrate_sdk",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_evm_sdk",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_multi_chain_sdk",
            "value": 56,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/substrate_sign_simulation",
            "value": 161587,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/evm_sign_simulation",
            "value": 141557,
            "range": "± 508",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_creation",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_arithmetic",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cross_chain_operations/chain_type_detection",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cross_chain_operations/multi_chain_transaction_creation",
            "value": 131,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cross_chain_operations/cross_chain_address_handling",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hybrid_chain_operations/hybrid_chain_type_check",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hybrid_chain_operations/hybrid_evm_transaction",
            "value": 66,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bulk_transaction_creation/substrate_bulk/10",
            "value": 688,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bulk_transaction_creation/substrate_bulk/100",
            "value": 6647,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "bulk_transaction_creation/evm_bulk/10",
            "value": 638,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/dot_to_planck",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/ksm_to_planck",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/eth_to_wei",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/planck_to_dot",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/wei_to_eth",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "chain_metadata_operations/get_rpc_endpoints",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "chain_metadata_operations/check_smart_contract_support",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "chain_metadata_operations/get_chain_ids",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kherld.hussein@gmail.com",
            "name": "kh3rld",
            "username": "kh3rld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0002093a6d9eefcac30596ab184f46d334dea97",
          "message": "fix: docs (#73)\n\n* chore(docs): update logos and add new ones\n\n* docs(README): update links\n\n* docs(viewer): improve UI/UX\n\n* docs(viewer): improve UI/UX\n\n* docs(js): update module initialization and add new modules for advanced visualization, metrics, workflow simulator, and personalization\n\n* docs(css): update main stylesheet with new design elements and animations\n\n* docs(search): update search manifest with new categories and paths\n\n* docs(subscribe): update API endpoint and add new subscription handling logic\n\n* Revert \"docs(subscribe): update API endpoint and add new subscription handling logic\"\n\nThis reverts commit 8c1b76092fd71d852af33e6e530af594f7d5cb8c.\n\n* Revert \"docs(search): update search manifest with new categories and paths\"\n\nThis reverts commit 581eaa118c7c0a5c8524b3c9cbb7db47a42b5e0b.\n\n* Revert \"docs(css): update main stylesheet with new design elements and animations\"\n\nThis reverts commit fbe3410ef26484073511a56fa3c2ded72b1dc4c6.\n\n* Revert \"docs(js): update module initialization and add new modules for advanced visualization, metrics, workflow simulator, and personalization\"\n\nThis reverts commit 235e7bbe0f4c95db1d13c32d38856bab005d7311.\n\n* Revert \"docs(viewer): improve UI/UX\"\n\nThis reverts commit 070e644d74c5c28abee8f49147afd051f87caa7a.\n\n* Revert \"docs(viewer): improve UI/UX\"\n\nThis reverts commit f12ba946d40df93c8f846529b867b243405d6a57.\n\n* Revert \"docs(README): update links\"\n\nThis reverts commit b7dcfc536af992ae90dde40f946664ac30ae951d.\n\n* fix(test): update private key configuration\n\n* docs: fix\n\n---------\n\nCo-authored-by: Kherld <50875687+kherldhussein@users.noreply.github.com>",
          "timestamp": "2026-01-05T09:09:47-05:00",
          "tree_id": "1f30ea2a05636ac1582afc047d0a6011a4d06363",
          "url": "https://github.com/kherldhussein/apex-sdk/commit/d0002093a6d9eefcac30596ab184f46d334dea97"
        },
        "date": 1767623082007,
        "tool": "cargo",
        "benches": [
          {
            "name": "transaction_creation/create_substrate_transfer",
            "value": 54,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_creation/create_evm_transfer",
            "value": 55,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/1",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_substrate_sdk",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_evm_sdk",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_multi_chain_sdk",
            "value": 53,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/substrate_sign_simulation",
            "value": 161030,
            "range": "± 5549",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/evm_sign_simulation",
            "value": 141046,
            "range": "± 792",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_creation",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_arithmetic",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cross_chain_operations/chain_type_detection",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cross_chain_operations/multi_chain_transaction_creation",
            "value": 109,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cross_chain_operations/cross_chain_address_handling",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "hybrid_chain_operations/hybrid_chain_type_check",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hybrid_chain_operations/hybrid_evm_transaction",
            "value": 54,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bulk_transaction_creation/substrate_bulk/10",
            "value": 568,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bulk_transaction_creation/substrate_bulk/100",
            "value": 5478,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bulk_transaction_creation/evm_bulk/10",
            "value": 555,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/dot_to_planck",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/ksm_to_planck",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/eth_to_wei",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/planck_to_dot",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/wei_to_eth",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "chain_metadata_operations/get_rpc_endpoints",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "chain_metadata_operations/check_smart_contract_support",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "chain_metadata_operations/get_chain_ids",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kherld.hussein@gmail.com",
            "name": "kh3rld",
            "username": "kh3rld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4367757b5e7b70aba2be758011d209029076e70a",
          "message": "impl tx broadcasting (#107)\n\n* feat: implement core broadcasting logic\n\n* refactor: improve formatting of validate_extrinsic_format function\n\n* test(substrate): impl tsactional tests",
          "timestamp": "2026-01-20T00:49:06-05:00",
          "tree_id": "8282f75a50e7bab5edf28d0b36c8b60526a8fc00",
          "url": "https://github.com/kherldhussein/apex-sdk/commit/4367757b5e7b70aba2be758011d209029076e70a"
        },
        "date": 1768889073960,
        "tool": "cargo",
        "benches": [
          {
            "name": "transaction_creation/create_substrate_transfer",
            "value": 58,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_creation/create_evm_transfer",
            "value": 59,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/substrate_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/0",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/1",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "address_validation/evm_validation/2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_substrate_sdk",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_evm_sdk",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sdk_initialization/create_multi_chain_sdk",
            "value": 54,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/substrate_sign_simulation",
            "value": 161059,
            "range": "± 571",
            "unit": "ns/iter"
          },
          {
            "name": "transaction_signing/evm_sign_simulation",
            "value": 141017,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_creation",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "amount_operations/amount_arithmetic",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cross_chain_operations/chain_type_detection",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cross_chain_operations/multi_chain_transaction_creation",
            "value": 113,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cross_chain_operations/cross_chain_address_handling",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hybrid_chain_operations/hybrid_chain_type_check",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hybrid_chain_operations/hybrid_evm_transaction",
            "value": 58,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bulk_transaction_creation/substrate_bulk/10",
            "value": 603,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bulk_transaction_creation/substrate_bulk/100",
            "value": 6043,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "bulk_transaction_creation/evm_bulk/10",
            "value": 577,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/dot_to_planck",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/ksm_to_planck",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/eth_to_wei",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/planck_to_dot",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_conversions/wei_to_eth",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "chain_metadata_operations/get_rpc_endpoints",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "chain_metadata_operations/check_smart_contract_support",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "chain_metadata_operations/get_chain_ids",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}