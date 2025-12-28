window.BENCHMARK_DATA = {
  "lastUpdate": 1766932677675,
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
      }
    ]
  }
}