---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: true
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: Welcome to Slidev
hideInToc: true
---

# GitHub Actions & Runners

Known state @ID from POV of mirolli

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/mrolli/slides-gh-actions-n-runners" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
Short intro to action and runners mainly by examples.
-->

---
hideInToc: true
---

# Table of contents

<Toc></Toc>

---

# GitHub Actions

https://docs.github.com/en/actions/examples/using-scripts-to-test-your-code-on-a-runner

<img src="/overview-actions-using-scripts-ci-example.webp" class="rounded shadow" />

---
title: Action Examples Used Inhouse
---

## Basic workflow to render mkdocs-material documentation

Github-hosted runner, turns markdown to HTML and commits to gh-pages branch.

```yaml
---
name: ci
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v2
        with:
          python-version: 3.x
      - run: pip install mkdocs-material
      - run: pip install mkdocs-git-revision-date-plugin
      - run: mkdocs gh-deploy --force
```

Actions are actually also just software projects host on GitHub, i.e.
[actions/setup-python](https://github.com/actions/setup-python).

---
hideInToc: true
---

## Example Workflow Run In a Container

```yaml
name: ansible-and-yaml-linting

on:
  pull_request:
  workflow_dispatch:

jobs:
  liniting:
    runs-on: ubuntu-latest
    container:
      image: ghcr.io/idsys-unibe-ch/idsys.ansible:v1.0.0
      env:
        # These tell ansible-lint to use github compatible annotation format:
        GITHUB_ACTIONS: "true"
        GITHUB_WORKFLOW: "{{ github.workflow.name }}"

    steps:
      - name: Checkout repository ${{ github.repository.name }}
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
        env:
          GITHUB_TOKEN: ${{ secrets.CI_BOT_PAT }}

      ...

      - name: Create tmp sys.vaultpw file
        run: echo "${{ secrets.SYS_VAULT_PW }}" > sys.vaultpw

      - name: run ansible-lint
        run: ansible-lint -v --force-color

      - name: Delete tmp sys.vaultpw file # This step is always executed
        if: always()
        run: rm sys.sys_vault_pw
```

---
hideInToc: true
---

## Interactive Workflow With User Input

This is a part of a PoC workflow that will allow ASM to make dumps from one env
in to another, i.e. parisprod -> paristest.

```yaml
on:
  workflow_dispatch:
    inputs:
      job:
        type: choice
        description: What job to run
        options:
        - ksldbtest1 ( kslp -> ksldbtest1 )
                    ...
        - parisdbiam ( parisprod -> parisdbiam )
jobs:
  clone_DB:
    runs-on: [self-hosted, ubuntu]
    env:
      SELECTION: ${{ github.event.inputs.job }}
    steps:
    - uses: actions/checkout@v3
    - name: Set up Python 3.10
      uses: actions/setup-python@v4
      with:
        python-version: '3.10'
```

---
hideInToc: true
---

## Interactive Workflow With User Input (continued)

```yaml
    - name: Install dependencies
      run: 'python -m pip install --upgrade pip

        if [ -f requirements.txt ]; then pip install -r requirements.txt; fi

        '
    - id: systems
      run: echo "systems=$(echo '${{ github.event.inputs.job }}' | cut -d ' ' -f1 )" >> $GITHUB_OUTPUT
    - id: originDB
      run: echo "originDB=$(echo '${{ github.event.inputs.job }}' | cut -d ' ' -f3 )" >> $GITHUB_OUTPUT
    - id: destinationDB
      run: echo "destinationDB=$(echo '${{ github.event.inputs.job }}' | cut -d ' ' -f5 )" >> $GITHUB_OUTPUT
    - id: OriginDBPWName
      run: echo "OriginDBPWName=${{ format('POSTGRES_DB_{0}_KEY', steps.originDB.outputs.originDB) }}" 
        >> $GITHUB_OUTPUT
    - id: DestinationDBPWName
      run: echo "DestinationDBPWName=${{ format('POSTGRES_DB_{0}_KEY', steps.destinationDB.outputs.destinationDB) }}" 
        >> $GITHUB_OUTPUT
    - name: execute py script
      run: python main.py -p ${{ steps.systems.outputs.systems }} -opw "${{ secrets[steps.OriginDBPWName.outputs.OriginDBPWName]
        }}" -dpw "${{ secrets[steps.DestinationDBPWName.outputs.DestinationDBPWName]
        }}" -f
```

---
layout: two-cols
title: GitHub Runners
---

## Github-hosted Runners

[Docs on GitHub-hosted Runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners)

**Pros:**

* Managed by GitHub
* Continuously maintained and improved
* Each runner is a new VM with preinstalled software
* Many OS supported (Ubuntu Linux, Windows, macOS)

**Cons:**

* Dynamic IPs
* Shared with everybody
* No access to UniBE internal ressources (border firewall)

::right::
  
  
## Self-hosted Runners

[Docs on self-hosted Runners](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)

**Pros:**

* Managed by ID => anything possible
* Multiple, specialzed runners...
* within network of choice

**Cons:**

* Manged by ID => resources, Know-How?
* Security!
* Who for whom?

  

---

# Current Runner Situation

With GitHub Actions, developers can write and combine individual tasks called actions to create custom workflows. To enable GitHub Actions for your GitHub Enterprise Server instance, you must host at least one machine to execute jobs. This machine is called a self-hosted runner. Self-hosted runners can be physical, virtual, in a container, on-premises, or in a cloud. Your runner machine connects to GitHub Enterprise Server using the GitHub Actions self-hosted runner application. Self-hosted runners can run Linux, Windows, or macOS. For more information, see "About self-hosted runners."

Demo:

* https://github.unibe.ch/michael-rolli/testy
* https://github.unibe.ch/idsys-unibe-ch/testy
* https://github.com/mrolli/testy

All three are the same, public and may be forked into other Orgs for testing
purposes.

---

## GHE Cloud: Action Policies

<img src="/ghec_action_policies.png" class="rounded shadow" />

---

## GHE Cloud: GitHub-hosted Default Runners

<img src="/ghec_action_runners.png" class="rounded shadow" />

<img src="/ghec_standard_runners.png" class="rounded shadow" />

---

## GHE Cloud: Monthly Action Usage on 2023-06-20

<img src="/ghec_montly_usage.png" class="rounded shadow" />

---

## GHE On-Prem: Action Policies

<img src="/ghes_actions_allowed.png" class="rounded shadow" />

---

## GHE On-Prem: Self-hosted Runners Enterprise-level

<img src="/ghes_no_runners.png" class="rounded shadow" />

---

## GHE On-Prem: Self-hosted Runners Org ID-SYS

<img src="/ghes_idsys_runners.png" class="rounded shadow" />

---

# Runners Conclusion

**Use github.com (aka Cloud) as much as possible!**

Self-hosted runners are needed a) if working in GHE on-prem or b) working in
GHE Cloud but with actions acting on local resources within UniBE networks.

For on-premise, three possible "solutions":

* ID runs their own self-hosted runner fleet
  * Things to clarify: who for whom at what cost -> Vision, RE, Budget ...?
* Use [GitHub-hosted large runners](https://docs.github.com/en/actions/using-github-hosted-runners/using-larger-runners), currently in public beta
* Wait and buy GitHub-hosted runners in Azure => when, at what cost?

**CAVEAT:**

The current structure in our GitHub Enterprise (cloud + on on-premise) does not
make it easy for ID to share policies/configuration/runners/... resources on
this topic:

* [Best practices for structuring organizations in your enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/best-practices-for-structuring-organizations-in-your-enterprise)
* [Organization Archetypes](https://gist.github.com/rwnfoo/3e19747f6dc2c5b9cfb0ff9c89d834b4)

---
transition: fade-out
layout: two-cols
---

# Book Recommendations

<img src="/book1.png" class="m-0 h-100 rounded shadow" />

::right::

<img src="/book2.png" class="m-15 h-100 rounded shadow" />
